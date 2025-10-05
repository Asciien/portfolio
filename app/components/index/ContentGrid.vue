<script setup lang="ts">
  import indexData from '../../../content/index.json'

  const data = indexData
</script>

<template>
  <div class="grid grid-cols xl:grid-cols-2 gap-4 h-screen pt-16 lg:pl-6">

    <div class="grid grid-rows-2 gap-4 max-xl:pt-12 max-xl:grid-rows-[1fr_auto]">
      <div class="flex flex-col justify-center items-center md:items-start p-4">
          <h1 class="textformat text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl shadow-text">Bienvenue</h1>
          <p class="textformat pt-4 pl-2 text-sm md:text-xl shadow-text">
            {{ data.intro }}
          </p>
      </div>
      <div class="p-0 lg:p-4 flex max-xl:justify-center items-start xl:items-center">
        <IndexResumeDownloadButton />
      </div>
    </div>

    <div class="p-4 flex flex-col justify-center">
      <IndexProjectsBars />
    </div>
  </div>
</template>