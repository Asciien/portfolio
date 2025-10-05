// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', [
    '@nuxt/sitemap',
    {
      hostname: 'https://raphaelquinchon.com',
      gzip: true
    }
  ], '@nuxtjs/sitemap'],
  
  app: {
    head: {
      title: 'Raphaël Quinchon | Développeur Full Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Raphaël Quinchon – Développeur web full-stack passionné, créant des applications rapides, modernes et élégantes. Découvrez mes projets, compétences et réalisations.' },
        { name: 'author', content: 'Raphaël Quinchon' },
        { name: 'google-site-verification', content: 'o9OKPBwWZ_1qnwomtxwivzX2s_tYEHQd3OYrHfv6GH0' },
      ]
    }
  },
  
  css: [
    join(fileURLToPath(new URL('.', import.meta.url)), 'assets/css/main.css')
  ]
})