<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">
    {{ t("button.technique") }}
  </h1>
  <Technology />
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"
import Technology from "../components/Technology.vue"
useHead({
  title: "Techniques",
})
</script>