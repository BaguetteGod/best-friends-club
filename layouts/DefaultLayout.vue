<template>
  <div class="flex flex-row justify-between p-8 fixed w-full z-10 items-center">
    <div>
      <NuxtLink to="/" class="text-gray-800 w-8 h-8"> <BvcLogo /> </NuxtLink>
      <div class="menu-toggle">
        <div id="menu-toggle-button">
          <span />
        </div>
      </div>
    </div>
    <div v-if="menuOpen" class="nav-container">
      <div class="flex flex-row items-center gap-8">
        <div class="flex flex-col">
          <BvcLogo />
        </div>
        <div class="flex flex-col">
          <div class="nav-link">
            <NuxtLink to="/">Home</NuxtLink>
            <div class="nav-item-wrapper" />
          </div>
          <div class="nav-link">
            <NuxtLink to="/">Tijdlijn</NuxtLink>
            <div class="nav-item-wrapper" />
          </div>
          <div class="nav-link">
            <NuxtLink to="/">Over ons</NuxtLink>
            <div class="nav-item-wrapper" />
          </div>
        </div>
      </div>
    </div>

    <Bars2Icon class="h-8 w-8 text-gray-800 cursor-pointer" />
  </div>

  <div
    id="scroll-area"
    ref="scrollArea"
    class="h-full overflow-y-auto flex flex-col grow scroll-smooth"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Bars2Icon } from '@heroicons/vue/24/outline';
import BvcLogo from 'assets/BvcLogo.vue';

const menuOpen = ref(false);
const scrollArea = ref(null);

// TODO: Keep track of previous scroll distance to top, compare to currentY to check if scrolling up or down

// let currentThreshold = 0;
// const maxThreshold = 1;
// const thresholdArray: number[] = [];
// while (currentThreshold < maxThreshold) {
//   thresholdArray.push(currentThreshold);
//   currentThreshold += 0.01;
// }
//
// onMounted(() => {
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: thresholdArray,
//   };
//
//   const intersectionCallback = (entries: [IntersectionObserverEntry]): void => {
//     entries.forEach((entry: IntersectionObserverEntry) => {
//       const currentY = entry.boundingClientRect.y;
//       const elementHeight = entry.boundingClientRect.height;
//       const { isIntersecting } = entry;
//
//       if (isIntersecting) {
//         const imageDiv = entry.target.children[0] as HTMLElement;
//         if (currentY !== 0) {
//           imageDiv.style.transform = `scale(${(3 * currentY) / elementHeight})`;
//         }
//       }
//     });
//   };
//
//   const observer = new IntersectionObserver(intersectionCallback, options);
//
//   const scalableImages = document.querySelectorAll('.scalableImages');
//   scalableImages.forEach((el) => {
//     observer.observe(el);
//   });
// });
</script>
