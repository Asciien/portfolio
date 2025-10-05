<script setup lang="ts">

    const { data : info } = await useAsyncData('info', () =>
        queryContent('/profil').findOne()
    )

</script>

<template>
    <div class="p-6 bg-black/50 w-screen md:w-[50vw] md:h-[33vh] flex flex-col items-center justify-center text-white">
        <h1 class="text-2xl font-bold mb-4">{{ info.firstName }} {{ info.lastName }}</h1>
        <h2 class="text-md font-thin">{{ info.workAs }}</h2>
        <h3 class="text-md font-thin">{{ info.headSubtitle }}</h3>
    </div>
</template>