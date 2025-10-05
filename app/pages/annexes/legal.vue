<template>
  <NuxtLayout
    name="anx-layout"
    :title="doc?.title"
    :subtitle="doc?.subtitle"
    :last-updated="doc?.lastUpdated"
  >
    <ContentRenderer :value="doc" />
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()

  const pageName = route.path.split('/').filter(Boolean).pop()

  const { data: doc } = await useAsyncData(`content-annexes-${pageName}`, () => {
    return queryContent()
      .where({ _path: `/annexes/${pageName}` })
      .findOne()
  })

  if (!doc.value) {
    throw createError({
      statusCode: 404,
      message: `Document ${pageName}.md non trouvé`
    })
  }

  definePageMeta({
    layout: false // Désactive le layout automatique car on utilise NuxtLayout explicitement
  })
</script>