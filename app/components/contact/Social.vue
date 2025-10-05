<script setup lang="ts">
    import { Icon } from '@iconify/vue'

    const { data: social } = await useAsyncData('social', () =>
        queryContent('/social').findOne()
    )

    const iconMap: Record<string, string> = {
        github: 'mdi:github',
        linkedin: 'mdi:linkedin',
        twitter: 'bi:twitter',
    }
</script>

<template>
    <div class="md:w-[50vw]">

        <h2 class="text-white text-center mb-4 md:text-2xl">
            Retrouvez-moi également sur ces plateformes
        </h2>

        <div v-if="social?.links" class="flex flex-wrap gap-3 p-8 justify-center">
            <a
                v-for="item in social.links"
                :key="item.platform"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-4 rounded-lg transition"
            >
                <Icon :icon="iconMap[item.platform.toLowerCase()] || 'mdi:link-variant'" class="text-2xl"/>
                <span class="max-md:hidden">{{ item.platform }}</span>
            </a>
        </div>

    </div>
</template>
