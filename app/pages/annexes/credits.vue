<template>
    <NuxtLayout
        name="anx-layout"
        :title="data?.title"
        :subtitle="data?.subtitle"
        :last-updated="data?.['last-updated']"
    >
        <div>
            <h2 class="pb-6">Sources et crédits</h2>
            <div v-if="data?.sources">
                <div v-for="(source, index) in data.sources" :key="index" class="pb-4">
                    <p>{{ source.use }}</p>
                    <p> Auteur : <strong>{{ source.author }}</strong></p>
                    <p><a :href="source.link" target="_blank" rel="noopener noreferrer">{{ source.link }}</a></p>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { data } = await useAsyncData('credits', () =>
        queryContent('/annexes/credits').findOne()
    )

    if (!data.value) {
        throw createError({
            statusCode: 404,
            message: 'Document credits non trouvé'
        })
    }

    definePageMeta({
        layout: false
    })
</script>