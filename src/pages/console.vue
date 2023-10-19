<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">{{ t("button.events") }}</h1>
  
  <Timeline />
</template>

<script setup lang="ts">
import Timeline from '../components/Cv.vue'
import { useHead } from "@vueuse/head"

useHead({
  title: "Timeline - Muhamamd Farhan",
})
</script>
