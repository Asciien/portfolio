<script setup lang="ts">

    const { data } = await useAsyncData('about', () =>
        queryContent('/about').findOne()
    )

</script>

<template>
    <div class="max-h-[25vh] md:max-h-screen md:h-[93vh] max-md:overflow-y-scroll text-white bg-black/30 w-screen p-4">
        <p class="mb-3 text-md font-bold underline">{{ data.title }}</p>
        <ContentRenderer v-if="data" :value="data" />
    </div>
</template>