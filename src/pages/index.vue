
<script setup lang="ts">
import { useHead } from "@vueuse/head"

useHead({
  title: "Home - Muhammad Farhan",
})


</script>



<template>
  <div class="space-y-24">
    <AppHome />
    <Events :home="true" />
    <Articles :home="true" />
    <Subscribe />
  </div>
</template>
