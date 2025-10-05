<template>
    <video 
        autoplay 
        muted 
        loop 
        playsinline 
        class="absolute inset-0 w-full h-full object-cover -z-10"
    >
        <source src="/files/background.mp4" type="video/mp4">
    </video>

    <!-- Blur layer -->
    <div
      class="absolute inset-0 -z-10
             bg-black/20
             backdrop-blur-lg
             shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
    </div>
</template>