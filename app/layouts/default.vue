<template>
  <UiHeader />
  <UiMobileNavigation />
    <slot />
  <UiFooter />
</template>

<script setup lang="ts">
    import Header from '~/components/ui/Header.vue'
    import Footer from '~/components/ui/Footer.vue'
</script>