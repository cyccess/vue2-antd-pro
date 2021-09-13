<template>
  <a-tooltip title="主题">
    <span class="action" @click="dialogVisible = true">
      <a-icon type="skin"></a-icon>
    </span>
  </a-tooltip>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      dialogVisible: false
    }
  }
})
</script>
