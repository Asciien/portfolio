<template>
  <!-- Bouton -->
    <button
        @click="open = !open"
        class="bg-gray-800 p-2 rounded fixed right-2 top-[90vh] md:hidden z-60 rotate-180"
    >
        <img src="/icons/right-arrow.png" alt="Ouvrir le menu" class="w-6 h-6" />
    </button>

  <!-- Overlay -->
    <div
        v-if="open"
        class="fixed inset-0 bg-black/70 z-50 md:hidden"
        @click="open = false"
    ></div>

  <!-- Sidebar -->
    <aside
    class="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 md:hidden"
    :class="open ? 'translate-x-0' : 'translate-x-[100%]'"
    >
        <nav class="flex flex-col h-full p-6 justify-between">

            <!-- Milieu -->
            <div class="flex flex-col justify-center flex-grow space-y-6">
            <NuxtLink @click="open=false" to="/profil" class="btn-hover">Profil</NuxtLink>
            <NuxtLink @click="open=false" to="/projets" class="btn-hover">Projets</NuxtLink>
            <NuxtLink @click="open=false" to="/contact" class="btn-hover">Contact</NuxtLink>
            </div>

            <!-- Bas -->
            <div class="flex flex-col space-y-2 text-left">
            <a href="#" class="hover:underline block">Assets & Credits</a>
            <a href="#" class="hover:underline block">Code source</a>
            <a href="#" class="hover:underline block">Mentions légales</a>
            <a href="#" class="hover:underline block">Politique de confidentialité</a>
            </div>

        </nav>
    </aside>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const { data: links } = await useAsyncData('footer', () =>
  queryContent('footer').findOne()
)
</script>
