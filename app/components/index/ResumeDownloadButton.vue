<template>
    <a 
        href = "/files/cv.pdf"
        download="resume.pdf"
        class="flex items-center gap-3 bg-blue-800 hover:bg-blue-900 shadow-md text-white md:text-sm lg:text-md xl:text-xl px-3 py-2 lg:px-6 lg:py-3 rounded-lg transition-colors duration-100"
    >
        <img 
            src="/icons/download.png" 
            alt="Français" 
            class="w-auto h-4 md:h-6 xl:h-8 cursor-pointer hover:scale-110 transition-transform" 
        />
        <p>Telechargez mon curriculum vitae <span class="hidden lg:inline">maintenant</span></p>
    </a>
</template>