<script setup lang="ts">
import { useRouter } from "vue-router"
import { defineProps } from "vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const router = useRouter()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      name: props.name
    </p>
    <p class="text-sm opacity-50">
      <em>Route</em>
    </p>

    <div>
      <button class="m-3 mt-8 text-sm" @click="router.back()">
        {{ props.name }}
      </button>
    </div>
  </div>
</template>
