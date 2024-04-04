// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    modules: [
        // ...
        '@pinia/nuxt',
        '@vueuse/nuxt', 
        '@nuxt/ui',
        [
            '@nuxtjs/i18n',
            {
              // Module Options
            }
        ]
    ],
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