<template>
  <div
    class="flex flex-row justify-between p-4 lg:px-8 lg:py-6 fixed z-30 items-center w-screen bg-white main-nav"
  >
    <div>
      <NuxtLink to="/" class="text-gray-800 w-8 h-8">
        <BvcLogo class="logo-link" width-height="40px" />
      </NuxtLink>
      <div>
        <div>
          <span />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col gap-2 cursor-pointer bar-container"
      @click="toggleMenu"
    >
      <span class="bg-gray-900 w-6 h-0.5 rounded-full bar bar-top" />
      <span class="bg-gray-900 w-6 h-0.5 rounded-full bar bar-bot" />
    </div>
  </div>

  <div
    ref="fullscreenNav"
    class="fixed h-screen w-screen z-20 overflow-hidden hidden flex-row items-center w-full h-full justify-center text-5xl lg:text-7xl gap-32"
    style="backdrop-filter: blur(0); background: rgba(0, 41, 21, 0)"
  >
    <div class="overflow-hidden hidden lg:block">
      <BvcLogo class="w-72 h-72 relative block nav-logo fill-white" />
    </div>
    <div class="flex flex-col text-white gap-8 relative m-0">
      <div class="overflow-hidden block flex items-center gap-10">
        <NuxtLink
          class="relative block nav-link"
          :class="currentRoute.name === 'index' ? 'opacity-50' : 'text-white'"
          to="/"
          @click="toggleMenu"
          @mouseover="toggleHover($event, 'index')"
          @mouseleave="toggleHover($event, 'index')"
        >
          Home
        </NuxtLink>
        <div class="w-8">
          <NavIndicator class="mt-1 nav-indicator opacity-0 index" />
        </div>
      </div>
      <div class="overflow-hidden block flex items-center gap-10">
        <NuxtLink
          class="relative block nav-link"
          :class="
            currentRoute.name === 'timeline' ? 'opacity-50' : 'text-white'
          "
          to="/timeline"
          @click="toggleMenu"
          @mouseover="toggleHover($event, 'timeline')"
          @mouseleave="toggleHover($event, 'timeline')"
        >
          Tijdlijn
        </NuxtLink>
        <div class="w-8">
          <NavIndicator class="mt-1 nav-indicator opacity-0 timeline" />
        </div>
      </div>
      <div class="overflow-hidden block flex items-center gap-10">
        <NuxtLink
          class="relative block nav-link"
          :class="currentRoute.name === 'about' ? 'opacity-50' : 'text-white'"
          to="/about"
          @click="toggleMenu"
          @mouseover="toggleHover($event, 'about')"
          @mouseleave="toggleHover($event, 'about')"
        >
          Over ons
        </NuxtLink>
        <div class="w-8">
          <NavIndicator class="mt-1 nav-indicator opacity-0 about" />
        </div>
      </div>
    </div>
  </div>

  <div
    id="scroll-area"
    ref="scrollArea"
    class="h-fit flex flex-col grow scroll-smooth"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import BvcLogo from 'assets/BvcLogo.vue';
import NavIndicator from 'assets/NavIndicator.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tween = gsap.core.Tween;

const { currentRoute } = useRouter();

const scrollArea = ref();
const fullscreenNav = ref();
const navIndicators: Ref<Tween[]> = ref([]);
const navOpen = ref(false);
const timer = ref();

const navTimeline = gsap.timeline().reversed(true);

provide('scrollArea', scrollArea);

const toggleHover = (event: PointerEvent | null, target: string) => {
  if (!event || event.type === 'mouseleave') {
    timer.value = setTimeout(() => {
      navIndicators.value.forEach((indicator: Tween) => {
        const indicatorTarget = indicator.targets()[0] as HTMLElement;
        const routeCurrent = currentRoute.value.name as string;

        if (indicatorTarget.classList.contains(routeCurrent)) {
          indicator.reversed(false);
          return;
        }

        indicator.reversed(true);
      });
    }, 1000);
    return;
  }

  clearTimeout(timer.value);

  navIndicators.value.forEach((indicator: Tween) => {
    const indicatorTarget = indicator.targets()[0] as HTMLElement;

    if (indicatorTarget.classList.contains(target.toString())) {
      indicator.reversed(false);
      return;
    }

    indicator.reversed(true);
  });
};

onMounted(() => {
  const navAnimation = gsap
    .from('.main-nav', {
      yPercent: -100,
      paused: true,
      duration: 0.5,
      opacity: 0,
    })
    .progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? navAnimation.play() : navAnimation.reverse();
    },
  });

  document.querySelectorAll('.nav-indicator').forEach((indicator) => {
    const navIndicator = gsap
      .to(indicator, { opacity: 1, duration: 0.5, delay: 0.5, x: -10 })
      .reversed(true);
    navIndicators.value.push(navIndicator);
  });

  navTimeline.to(fullscreenNav.value, {
    backdropFilter: 'blur(48px)',
    background: 'rgba(0, 41, 21, 0.4)',
    display: 'flex',
    duration: 0.5,
  });
  navTimeline.from('.nav-link', 1, {
    y: 150,
    ease: 'power4.out',
    stagger: {
      amount: 0.3,
    },
  });
  navTimeline.from(
    '.nav-logo',
    1,
    {
      x: 400,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    },
    '+0.75'
  );
  navTimeline.to(
    '.bar-top',
    {
      rotation: -45,
      duration: 0.5,
      transformOrigin: 'center',
      backgroundColor: 'white',
      y: +5,
    },
    '0'
  );
  navTimeline.to(
    '.bar-bot',
    {
      rotation: 45,
      duration: 0.5,
      transformOrigin: 'center',
      backgroundColor: 'white',
      y: -5,
    },
    '0'
  );
  navTimeline.to(
    '.logo-link',
    {
      duration: 0.5,
      fill: 'white',
    },
    '0'
  );
  navTimeline.to(
    '.main-nav',
    {
      duration: 0.25,
      backgroundColor: 'transparent',
    },
    '-0.25'
  );
});

const toggleMenu = () => {
  navOpen.value = !navOpen.value;
  navTimeline.reversed(!navTimeline.reversed());

  if (navOpen.value) {
    const routeCurrent = currentRoute.value.name as string;
    toggleHover(null, routeCurrent);
  }

  navIndicators.value.forEach((indicator) => {
    indicator.reversed(true);
  });
};
</script>
