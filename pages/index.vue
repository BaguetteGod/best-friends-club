<template>
  <div class="pt-60 h-fit flex flex-col gap-12 grow">
    <h1 class="text-20xl text-emerald-800 opacity-40 w-full px-10 flex flex-col">
      <span>De Beste</span>
      <span>Vrienden Club</span>
    </h1>
    <div class="flex flex-col h-screen w-full px-10 pb-10">
      <div class="flex gap-12 h-full">
        <div class="w-full overflow-hidden h-fit zoom-element">
          <div class="w-full image-style image-scaling" />
        </div>

        <div
          class="text-8xl text-wrap max-w-2xl text-center h-full flex flex-col justify-between items-center p-20"
        >
          <span>'s Werelds meest iconische en besloten organisatie</span>

          <div class="pb-40">
            <BvcLogo class="h-40 w-40" />
          </div>
        </div>
      </div>
    </div>

    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />
    <div class="h-96" />

    <div class="flex flex-col h-screen w-full px-10 pb-10">
      <div class="flex gap-12 h-full">
        <div class="w-full overflow-hidden h-fit zoom-element">
          <div class="w-full image-style image-scaling" />
        </div>

        <div
          class="text-8xl text-wrap max-w-2xl text-center h-full flex flex-col justify-between items-center p-20"
        >
          <span>'s Werelds meest iconische en besloten organisatie</span>

          <div class="pb-40">
            <BvcLogo class="h-40 w-40" />
          </div>
        </div>
      </div>
    </div>
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
      gsap.fromTo(
        imageElements[index],
        { scale: 2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: zoom,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
            markers: true,
          },
        }
      );
    }, zoom);
    context.value.push(zoomElement);
  });
});
</script>
