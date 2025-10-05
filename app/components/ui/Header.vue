<script setup>
  import { ref } from 'vue'
  const open = ref(false)
</script>


<template>
  <header class="grid grid-cols-2 md:grid-cols-3 absolute w-full px-8 py-4 items-center">
   
    <!-- Name -->
    <div>
      <NuxtLink to="/" class="text-white xl:text-2xl lg:text-xl md:text-lg font-bold">
          <span class="hidden md:inline">Raphael Quinchon</span>
          <span class="md:hidden">Raphael Q.</span>
      </NuxtLink>
    </div>

    <!-- Navigation desktop -->
    <nav class="hidden md:flex justify-center space-x-6 text-lg">
      <NuxtLink to="/profil" class="btn-hover">Profil</NuxtLink>
      <NuxtLink to="/projets" class="btn-hover">Projets</NuxtLink>
      <NuxtLink to="/contact" class="btn-hover">Contact</NuxtLink>
    </nav>

    <!-- Flags -->
    <div class="flex items-center justify-end gap-5 hidden"> <!-- Will be used later -->
      <img src="/icons/ukflag.png" alt="Français" class="w-auto h-8 cursor-pointer hover:scale-110 transition-transform" />
      <img src="/icons/frflag.png" alt="English" class="w-auto h-8 cursor-pointer hover:scale-110 transition-transform" />
    </div>
    
  </header>
</template>

<style scoped>

  .btn-hover {
    position: relative;
    display: inline-block;
    padding: 2px 5px;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
  }

  .btn-hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 0;
    background: currentColor;
    transition: width 0.3s ease, left 0.3s ease;
  }

  .btn-hover:hover::after {
    width: 100%;
    left: 0;
  }
</style>