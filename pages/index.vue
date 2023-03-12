<template>
  <div class="pt-40 lg:pt-60 h-fit flex flex-col gap-12 grow">
    <h1
      class="text-6xl lg:text-20xl text-emerald-800 opacity-40 w-full px-4 lg:px-10 flex flex-col"
    >
      <span>De Beste</span>
      <span>Vrienden Club</span>
    </h1>
    <div class="flex flex-col h-screen w-full lg:px-10 pb-10">
      <div class="flex flex-col lg:flex-row gap-12 h-full">
        <div class="w-full overflow-hidden h-fit zoom-element">
          <div class="w-full scale-150 lg:scale-200 image-style image-scaling" />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap max-w-2xl text-center h-full flex flex-col justify-between items-center p-4 lg:p-20"
        >
          <span>'s Werelds meest iconische en besloten organisatie</span>

          <div class="lg:pb-40">
            <BvcLogo class="w-20 h-20 lg:h-40 lg:w-40" />
          </div>
        </div>
      </div>
    </div>

    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BvcLogo from 'assets/BvcLogo.vue';
import Context = gsap.Context;

gsap.registerPlugin(ScrollTrigger);
const context: Ref<Context[]> = ref([]);

onMounted(() => {
  const zoomElements = document.querySelectorAll('.zoom-element');
  const imageElements = document.querySelectorAll('.image-scaling');
  zoomElements.forEach((zoom, index: number) => {
    const zoomElement = gsap.context(() => {
      gsap.to(imageElements[index], {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: zoom,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, zoom);
    context.value.push(zoomElement);
  });
});
</script>
