<template>
  <div class="pt-60 h-fit flex flex-col gap-12 grow">
    <h1 class="text-20xl text-emerald-800 opacity-40 w-full px-10">
      De Beste <br />
      Vrienden Club
    </h1>
    <div class="flex flex-col h-screen w-full px-10 pb-10">
      <div class="flex gap-12 h-full">
        <ImageComponent image-id="first-image" />

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
        <ImageComponent image-id="second-image" />

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

    <div class="flex flex-col h-screen w-full px-10 pb-10">
      <div class="flex gap-12 h-full">
        <ImageComponent image-id="third-image" />

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
import BvcLogo from 'assets/BvcLogo.vue';
</script>
