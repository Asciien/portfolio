<template>
  <footer
    class="hidden fixed bottom-0 left-0 w-full xl:flex flex-col text-white bg-black items-center justify-center pb-6
            transform transition-transform duration-500 ease-in-out"
    :class="showFooter ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="grid grid-cols-2 text-sm pt-8 pb-12 max-w-[500px] gap-24">
      <div class="space-y-2 list-none text-center">
        <li><NuxtLink to="/annexes/credits" target="_blank" class="hover:underline">Assets & crédits</NuxtLink></li>
        <li><NuxtLink to="https://github.com/Asciien/portfolio" external target="_blank" class="hover:underline">Code source</NuxtLink></li>
      </div>
      <div class="space-y-2 list-none text-center">
        <li><NuxtLink to="/annexes/legal" target="_blank" class="hover:underline">Mentions légales</NuxtLink></li>
        <li><NuxtLink to="/annexes/privacy" target="_blank" class="hover:underline">Politique de confidentialité</NuxtLink></li>
      </div>
    </div>
    <a class="text-white text-center">
      Développé avec ❤ par Quinchon Raphael - 2025
      <span class="text-[12px]">(V {{ version.major }}.{{ version.minor }}.{{ version.patch }})</span>
    </a>
  </footer>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const version = { major: 1, minor: 0, patch: 1 }
  const showFooter = ref(false)

  // debounce timer
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null

  function toggleByDelta(deltaY: number) {
    if (Math.abs(deltaY) < 6) return
    if (scrollTimeout) clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      showFooter.value = deltaY > 0
    }, 40)
  }

  function handleWheel(e: WheelEvent) {
    toggleByDelta(e.deltaY)
  }

  onMounted(() => {
    showFooter.value = false
    window.addEventListener('wheel', handleWheel, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
    if (scrollTimeout) clearTimeout(scrollTimeout)
  })
</script>