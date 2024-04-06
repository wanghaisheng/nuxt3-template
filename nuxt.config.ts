// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    modules: [
        // ...
        '@pinia/nuxt',
        '@vueuse/nuxt', 
        '@nuxt/ui',
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/default.scss";'
                }
            }
        }
    }
})