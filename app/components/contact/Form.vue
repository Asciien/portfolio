<script setup lang="ts">
  import { ref } from 'vue'

  const nom = ref('')
  const prenom = ref('')
  const entreprise = ref('')
  const email = ref('')
  const telephone = ref('')
  const message = ref('')
  const success = ref('')

  async function envoyerFormulaire() {
    try {
      const response = await $fetch('/api/form', {
        method: 'POST',
        body: {
          nom: nom.value,
          prenom: prenom.value,
          entreprise: entreprise.value,
          email: email.value,
          telephone: telephone.value,
          message: message.value
        }
      })

      success.value = response.message || '✅ Message envoyé avec succès !'
      nom.value = prenom.value = entreprise.value = email.value = telephone.value = message.value = ''
    } catch (err) {
      success.value = '❌ Erreur lors de l’envoi'
    }
  }
</script>

<template>
  <div class="px-8 md:w-[50vw]">
    <h1 class="text-xl md:text-2xl text-white mb-4">Contactez-moi</h1>

    <form @submit.prevent="envoyerFormulaire" class="flex flex-col gap-3 md:gap-4 text-sm">
      <input v-model="nom" type="text" placeholder="Nom" class="p-1 md:p-2 rounded text-black" required />
      <input v-model="prenom" type="text" placeholder="Prénom" class="p-1 md:p-2 rounded text-black" required />
      <input v-model="entreprise" type="text" placeholder="Entreprise" class="p-1 md:p-2 rounded text-black" />
      <input v-model="email" type="email" placeholder="Email" class="p-1 md:p-2 rounded text-black" required />
      <input v-model="telephone" type="tel" placeholder="Téléphone" class="p-1 md:p-2 rounded text-black" />
      <textarea v-model="message" placeholder="Message" class="p-1 md:p-2 rounded text-black" rows="4" required></textarea>

      <button type="submit" class="bg-blue-500 text-white md:text-xl py-1 md:py-3 rounded hover:bg-blue-600">
        Envoyer
      </button>
    </form>

    <p v-if="success" class="mt-1 text-white pr-6">{{ success }}</p>
  </div>
</template>
