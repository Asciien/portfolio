<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  const { data } = await useAsyncData('projects', () =>
    queryContent('/projects').findOne()
  )
</script>

<template>
  <div class="w-screen p-6 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">

    <div v-if="data?.published?.length" class="flex flex-col gap-4">
      <a
        v-for="project in data.published"
        :key="project.id"
        :href="project.link"
        target="_blank"
        class="bg-blue-900/50 text-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition transform"
      >
        <div class="flex justify-between flex-1">
          <div class="flex flex-col justify-center flex-1">
            <h3 class="text-md font-semibold">{{ project.title }}</h3>
            <p class="text-sm mt-1">{{ project.desc }}</p>
          </div>
          <div class="flex items-center">
            <Icon icon="mdi:arrow-right" class="text-2xl" />
          </div>
        </div>
        <p class="text-xs text-gray-300 mt-2">
          {{ project.updated ? `Dernière mise à jour : ${project.updated}` : '' }}
        </p>
      </a>
    </div>

    <div v-if="data?.indev?.length" class="flex flex-col gap-4">
      <a
        v-for="project in data.indev"
        :key="project.id"
        :href="project.link"
        target="_blank"
        class="bg-red-900/50 text-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition transform"
      >
        <div class="flex justify-between flex-1">
          <div class="flex flex-col justify-center flex-1">
            <h3 class="text-md font-semibold">{{ project.title }}</h3>
            <span class="text-yellow-300 text-xs font-bold mt-1">En développement</span>
            <p class="text-sm mt-1">{{ project.desc }}</p>
          </div>
          <div class="flex items-center">
            <Icon icon="mdi:arrow-right" class="text-2xl" />
          </div>
        </div>
        <p class="text-xs text-gray-300 mt-2">
          {{ project.updated ? `Dernière mise à jour : ${project.updated}` : '' }}
        </p>
      </a>
    </div>

  </div>
</template>
