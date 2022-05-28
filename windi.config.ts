import { defineConfig } from "vite-plugin-windicss"
import colors from "windicss/colors"
// import content from '@nuxt/content'

export default defineConfig({
  // content,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
      },
    },
    container: {
      center: true,
    },
  },
})
