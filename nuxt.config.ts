// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/i18n"],
	devtools: { enabled: false },
	ssr: false,
	i18n: {
		lazy: true,
		langDir: "locales",
		defaultLocale: "en",
		strategy: 'prefix',
		locales: [
			{
				name: "English",
				code: "en",
				iso: "en-US",
				file: "en.json",
			},
			{
				name: "Nederlands",
				code: "nl",
				iso: "nl-NL",
				file: "nl.json",
			},
			{
				name: "日本語",
				code: "ja",
				iso: "ja-JA",
				file: "ja.json",
			},
		],
		detectBrowserLanguage: {
			redirectOn: 'no prefix'
		},
	},
});
