<template>
  <div :id="imageId" class="w-full overflow-hidden">
    <div class="w-full image-style" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageId: { type: String, default: '' },
});
const { imageId } = toRefs(props);

const MAX_SCALE = 3;
const MIN_SCALE = 1;

const previousY = ref(0);
const lastScale = ref(2.9);
let currentThreshold = 0;
const maxThreshold = 1;
const thresholdArray: number[] = [];
while (currentThreshold < maxThreshold) {
  thresholdArray.push(currentThreshold);
  currentThreshold += 0.01;
}

const incrementScale = (scrollDirection: string): number => {
  if (
    lastScale.value - 0.01 <= MIN_SCALE ||
    lastScale.value + 0.01 >= MAX_SCALE
  ) {
    return lastScale.value;
  }

  if (scrollDirection === 'down') {
    lastScale.value -= 0.01;
    return lastScale.value;
  }
  lastScale.value += 0.01;
  return lastScale.value;
};

const resetScale = (currentTop: number, currentBottom: number) => {
  if (currentTop <= 0 && currentBottom <= 0) {
    lastScale.value = 1.1;
    return;
  }
  lastScale.value = 2.9;
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: thresholdArray,
  };

  const intersectionCallback = (entries: [IntersectionObserverEntry]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const currentY = entry.boundingClientRect.y;
      const currentTop = entry.boundingClientRect.top;
      const currentBottom = entry.boundingClientRect.bottom;
      const { isIntersecting } = entry;

      let scrollDirection = 'up';
      if (currentY < previousY.value) {
        scrollDirection = 'down';
      }

      if (isIntersecting) {
        const newScale = incrementScale(scrollDirection);
        const imageDiv = entry.target.children[0] as HTMLElement;
        if (currentY !== 0) {
          imageDiv.style.transform = `scale(${newScale}`;
        }
      }

      if (!isIntersecting) {
        resetScale(currentTop, currentBottom);
      }
      previousY.value = currentY;
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, options);

  const scalableImage = document.querySelector(`#${imageId.value}`);
  if (scalableImage) {
    observer.observe(scalableImage);
  }
});
</script>
