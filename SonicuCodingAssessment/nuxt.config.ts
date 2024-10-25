// https://nuxt.com/docs/api/configuration/nuxt-config
import {nodePolyfills} from 'vite-plugin-node-polyfills';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [nodePolyfills()],
})
