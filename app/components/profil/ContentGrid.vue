<template>
  <div class="h-screen pt-16 z-10 flex flex-col md:grid md:grid-cols-2 md:gap-8">
    <!-- Colonne gauche -->
    <div class="flex flex-col justify-center">
      <ProfilHead />
      <ProfilInformations />
      <ProfilGradutations />
    </div>

    <!-- Colonne droite -->
    <div class="flex justify-center items-center">
      <ProfilAbout />
    </div>
  </div>
</template>