<script lang="ts" setup>
import LangSwitcher from "@/components/LangSwitcher.vue";
const { locales } = useI18n();
const localeCodes = computed(() => locales.value.map((x) => (typeof x === "string" ? x : x.code)));
</script>

<template>
	<div>
		<LangSwitcher />
		<NuxtPage></NuxtPage>
	</div>
</template>

<style>
:root {
	font-family: sans-serif;
}

</style>
