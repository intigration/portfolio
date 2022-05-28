
<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useI18n } from "vue-i18n"
import { useHead } from "@vueuse/head"

useHead({
  title: "Home - Muhammad Farhan",
})

const name = ref("")

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <Logo />
    <HelloWorld />
  </div>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="engr-farhan" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/engr-farhan?trk=profile-badge">Muhammad Farhan</a></div>

  <div>
    <div class="py-4" />
    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      style="width: 250px"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>
    <div>
      <button class="m-3 text-sm" :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div> 
  </template>

<route lang="yaml">
meta:
  layout: home
</route>
