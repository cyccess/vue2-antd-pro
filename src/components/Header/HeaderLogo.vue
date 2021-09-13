<template>
  <div class="logo">
    <LogoSvg alt="logo" />
    <h1 v-if="showTitle" class="title">{{ title }}</h1>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import LogoSvg from '@/assets/logo.svg?inline'

export default defineComponent({
  name: 'HeaderLogo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '重庆兴农担保集团'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {}
  }
})
</script>
