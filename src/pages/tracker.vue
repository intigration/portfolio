<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">
    Tracker
  </h1>
  <Timeline />
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"
import Timeline from "../components/Timeline.vue"
useHead({
  title: "Vue",
})
</script>