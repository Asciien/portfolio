<script setup lang="ts">
  const { data } = await useAsyncData('graduation', () =>
    queryContent('/graduation').findOne()
  )
</script>

<template>
  <div v-if="data?.body" class="text-white bg-black/50 w-screen md:w-[50vw] md:h-[30vh]">
    <div v-for="(diploma, index) in data.body" :key="index" class="py-2 px-4">
        <div class="flex justify-between">
            <p v-if="diploma.title"><strong>{{ diploma.title }}</strong></p>
            <p v-if="diploma.level">Niveau : <span>{{ diploma.level }}</span></p>
        </div>
        <div class="flex flex-cols">
            <p v-if="diploma.specific">{{ diploma.specific }}</p>
            <p v-if="diploma.year">Année d'obtention : <span>{{ diploma.year }}</span></p>
        </div>
    </div>
  </div>
</template>