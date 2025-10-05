<script setup lang="ts">

    const { data : info } = await useAsyncData('info', () =>
        queryContent('/profil').findOne()
    )

    function calculateAge(birthDate: string): number {
        const birth = new Date(birthDate);
        const today = new Date();
        
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        // Si l'anniversaire n'est pas encore passé cette année, on retire 1
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    const age = calculateAge(info.value?.birthDate)

</script>

<template>
    <div class="p-6 bg-black/30 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-screen md:w-[50vw] md:h-[30vh] flex flex-col justify-start md:text-center text-white">
        <p>Age : <span>{{ age }}</span></p>
        <p>Nationalité : {{ info?.country }}</p>
        <p>Langues parlées : <span>{{ info?.canSpeak.join(', ') }}</span></p>
        <p>Région : <span> {{ info?.localisation }}</span></p>
    </div>
</template>