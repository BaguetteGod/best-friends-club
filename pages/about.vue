<template>
  <div
    class="pt-40 lg:pt-60 h-fit flex flex-col grow font-semibold pb-10 lg:pb-40"
  >
    <h1
      class="text-6xl lg:text-20xl text-emerald-800 opacity-40 px-4 lg:px-10 flex flex-col font-normal"
    >
      Over ons
    </h1>

    <div class="flex flex-col h-fit w-full pt-10 lg:pt-20 lg:px-10 pb-10">
      <div class="flex flex-col lg:flex-row gap-12 h-full">
        <div class="w-full overflow-hidden h-fit zoom-element">
          <div
            id="image-about"
            class="w-full scale-150 image-style image-scaling bg-cover bg-center"
          />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap max-w-2xl text-center h-fit lg:h-full flex flex-col lg:justify-between items-center p-4 lg:p-20"
        >
          <span>
            Ontmoet de leden die de Beste Vrienden Club zo iconisch maken.
          </span>

          <div class="pt-20 lg:pb-40">
            <BvcLogo class="w-20 h-20 lg:h-40 lg:w-40" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-fit w-full pt-10 lg:pt-20 lg:px-10">
      <div
        class="flex flex-col-reverse lg:flex-row-reverse gap-12 h-fit lg:h-full"
      >
        <div class="w-full lg:w-3/5 overflow-hidden h-fit zoom-element">
          <div
            id="image-members"
            class="w-full scale-150 lg:scale-200 image-style image-scaling bg-cover bg-bottom"
          />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap w-full lg:w-2/5 text-left h-fit lg:h-full flex flex-col justify-center items-center p-4 lg:p-20"
        >
          <span class="w-full">Sybren Hendertink</span>

          <span class="pt-10 lg:pt-20 text-3xl">
            De leden van De Beste Vrienden Club bestaan uit een groep
            gelijkgestemde, zorgvuldig geselecteerde mensen die een passie delen
            voor de goede dingen in het leven.
          </span>

          <span class="pt-4 text-xl font-normal">
            Dit zorgt voor een diverse mix van interessante en dynamische mensen
            van onder andere nieuwe en gevestigde werelden.
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-fit w-full pt-10 lg:pt-20 lg:px-10">
      <div class="flex flex-col-reverse lg:flex-row gap-12 h-fit lg:h-full">
        <div class="w-full lg:w-3/5 overflow-hidden h-fit zoom-element">
          <div
            id="image-members"
            class="w-full scale-150 lg:scale-200 image-style image-scaling bg-cover bg-bottom"
          />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap w-full lg:w-2/5 text-left h-fit lg:h-full flex flex-col justify-center items-center p-4 lg:p-20"
        >
          <span class="w-full">Stijn van den Munckhof</span>

          <span class="pt-10 lg:pt-20 text-3xl">
            De leden van De Beste Vrienden Club bestaan uit een groep
            gelijkgestemde, zorgvuldig geselecteerde mensen die een passie delen
            voor de goede dingen in het leven.
          </span>

          <span class="pt-4 text-xl font-normal">
            Dit zorgt voor een diverse mix van interessante en dynamische mensen
            van onder andere nieuwe en gevestigde werelden.
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-fit w-full pt-10 lg:pt-20 lg:px-10">
      <div
        class="flex flex-col-reverse lg:flex-row-reverse gap-12 h-fit lg:h-full"
      >
        <div class="w-full lg:w-3/5 overflow-hidden h-fit zoom-element">
          <div
            id="image-members"
            class="w-full scale-150 lg:scale-200 image-style image-scaling bg-cover bg-bottom"
          />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap w-full lg:w-2/5 text-left h-fit lg:h-full flex flex-col justify-center items-center p-4 lg:p-20"
        >
          <span class="w-full">Wouter Boomert</span>

          <span class="pt-10 lg:pt-20 text-3xl">
            De leden van De Beste Vrienden Club bestaan uit een groep
            gelijkgestemde, zorgvuldig geselecteerde mensen die een passie delen
            voor de goede dingen in het leven.
          </span>

          <span class="pt-4 text-xl font-normal">
            Dit zorgt voor een diverse mix van interessante en dynamische mensen
            van onder andere nieuwe en gevestigde werelden.
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-fit w-full pt-10 lg:pt-20 lg:px-10">
      <div class="flex flex-col-reverse lg:flex-row gap-12 h-fit lg:h-full">
        <div class="w-full lg:w-3/5 overflow-hidden h-fit zoom-element">
          <div
            id="image-members"
            class="w-full scale-150 lg:scale-200 image-style image-scaling bg-cover bg-bottom"
          />
        </div>

        <div
          class="text-5xl lg:text-8xl text-wrap w-full lg:w-2/5 text-left h-fit lg:h-full flex flex-col justify-center items-center p-4 lg:p-20"
        >
          <span class="w-full">Mika van Milligen</span>

          <span class="pt-10 lg:pt-20 text-3xl">
            De leden van De Beste Vrienden Club bestaan uit een groep
            gelijkgestemde, zorgvuldig geselecteerde mensen die een passie delen
            voor de goede dingen in het leven.
          </span>

          <span class="pt-4 text-xl font-normal">
            Dit zorgt voor een diverse mix van interessante en dynamische mensen
            van onder andere nieuwe en gevestigde werelden.
          </span>
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
