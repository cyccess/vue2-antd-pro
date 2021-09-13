<template>
  <a-tooltip>
    <template slot="title">
      {{ isFullscreen ? '退出全屏' : '全屏' }}
    </template>
    <span class="action" @click="toggle">
      <a-icon :type="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
    </span>
  </a-tooltip>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'
import { message } from 'ant-design-vue'

import screenfull from 'screenfull'

export default defineComponent({
  name: 'Screenfull',

  setup() {
    const isFullscreen = ref(false)

    const toggle = () => {
      if (!screenfull.isEnabled) {
        message.warning('暂不不支持全屏')
        return false
      }
      screenfull.toggle()
      isFullscreen.value = !isFullscreen.value
    }

    return {
      isFullscreen,
      toggle
    }
  }
})
</script>
