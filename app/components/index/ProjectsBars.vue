<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  const { data } = await useAsyncData('projects', () =>
    queryContent('/projects').findOne()
  )

  const firstThreeProjects = computed(() => {
    const allProjects = [...(data.value?.published || []), ...(data.value?.indev || [])]
    return allProjects.slice(0, 3)
  })
</script>

<template>
  <div class="h-auto">
    <h2 class="text-2xl text-white font-bold text-center shadow-text">Projets récents</h2>

    <div class="max-lg:max-h-[250px] flex flex-col lg:flex-row xl:flex-col overflow-x-auto justify-center items-center gap-4 md:max-h-[350px] pt-8">
      <NuxtLink
        v-for="(project, index) in firstThreeProjects"
        :key="index"
        :to="project.link"
        target="_blank"
        class="flex items-center w-3/4 gap-3 xl:gap-4 bg-gray-800 hover:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 h-24 overflow-hidden group"
      >
        <img
          :src="`/files/${project.img}`"
          alt="Aperçu du projet"
          class="w-16 h-16 object-cover rounded-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        />

        <div class="flex-grow min-w-0">
          <h3 class="text-sm md:text-md lg:text-lg font-semibold text-white overflow-hidden line-clamp-2">{{ project.title }}</h3>
          <p class="hidden md:inline text-gray-300 text-sm overflow-hidden line-clamp-2 mt-1">{{ project.desc }}</p>
        </div>

        <Icon
          icon="mdi:arrow-top-right"
          class="text-white text-xl flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .shadow-text {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }
</style>
