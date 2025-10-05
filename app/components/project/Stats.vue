<script setup lang="ts">
    const { data: stats } = await useAsyncData('projects', () =>
        queryContent('/projects').findOne()
    )
</script>

<template>
  <div class="pt-28">

    <!-- Stats bar -->
    <div class="bg-black/50 w-full p-5 flex justify-between items-center text-white md:rounded-r-xl md:w-[25vw] md:pl-16">
      
      <!-- Projets publiés -->
        <div class="flex flex-col gap-1 items-center text-base">
            <p>Projets publiés</p>
            <p class="text-xl font-bold">{{ stats?.published?.length ?? 0 }}</p>
        </div>

        <!-- En développement -->
        <div class="flex flex-col gap-1 items-center text-base">
            <p>En développement</p>
            <p class="text-xl font-bold">{{ stats?.indev?.length ?? 0 }}</p>
        </div>

    </div>

    <!-- Séparateur -->
    <div class="border-t-2 border-gray-200 my-4 md:hidden"></div>

  </div>
</template>
