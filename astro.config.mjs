// @ts-check
import {defineConfig} from 'astro/config';
import node from '@astrojs/node';

// import {loadEnv} from "vite";
// const env = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    adapter: node({
        mode: 'standalone',
    }),

    output: 'server',

    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",

        routing: {
            prefixDefaultLocale: true,
        },
    },
});