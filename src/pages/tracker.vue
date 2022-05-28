<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">
    {{ t("button.tracker") }}
  </h1>
  <Timeline />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
import { useHead } from "@vueuse/head"
import Timeline from "../components/Timeline.vue"
useHead({
  title: "Vue",
})
</script>