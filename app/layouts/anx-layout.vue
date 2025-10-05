<template>
  <div class="bg-black min-h-screen text-white">
    <!-- Bannière -->
    <section class="bg-white text-black flex flex-col items-center justify-center h-[33vh] p-8">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="text-lg">{{ subtitle }}</p>
      <p class="text-sm italic">Dernière mise à jour : {{ lastUpdated }}</p>
    </section>

    <!-- Content -->
    <section class="p-8 max-w-[70%] mx-auto text-white prose-h2:mt-8 prose-h2:mb-4">
      <slot />
    </section>
  </div>
</template>


<script setup>

    defineProps({
        title: { type: String, default: '' },
        subtitle: { type: String, default: '' },
        lastUpdated: { type: String, default: '' }
    })

</script>