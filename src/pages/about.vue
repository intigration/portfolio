<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">About</h1>
  <form name="contact" data-netlify="true">
    <div class="flex flex-col space-y-2 max-w-sm">
      <input
        type="text"
        name="name"
        v-model="form.name"
        class="form-input"
        placeholder="Name"
      />
      <input
        class="form-input"
        type="email"
        name="email"
        v-model="form.email"
        placeholder="E-mail"
      />
      <textarea
        name="message"
        v-model="form.message"
        rows="10"
        class="form-input"
        placeholder="Message"
      >
      </textarea>
      <div>
        <button type="submit" class="form-button" @click.prevent="handleSubmit">
          Send
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form-input {
  @apply flex;
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply text-gray-800;
  @apply bg-gray-100;
  @apply focus:(outline-none bg-gray-200);
  @apply focus-within:(ring ring-orange-400);
  @apply hover:bg-gray-200;
  @apply dark:(text-gray-50 bg-gray-800 focus:bg-gray-700 focus-within:ring-violet-600 hover:bg-gray-700);
  @apply transition-all;
}
.form-button {
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-gray-50;
  @apply bg-violet-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-orange-400);
  @apply hover:bg-violet-800;
  @apply dark:(text-gray-900 bg-orange-400 focus-within:ring-violet-600 hover:bg-orange-200);
  @apply transition-all;
  @apply cursor-pointer;
}
</style>

<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { ref } from "vue"

useHead({
  title: "Synopsis",
})

const form = {
  name: "",
  email: "",
  message: "",
}

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")

const handleSubmit = () => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...form }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you! Your message has been successfully sent.")
      } else {
        throw new Error("Something went wrong")
      }
    })
    .catch((error) => alert(error))
}
</script>
