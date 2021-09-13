<template>
  <div class="header-search">
    <a-input-search
      class="search-input"
      placeholder="通讯录搜索"
      :style="{ width: width + 'px' }"
      @blur="onBlur"
      @focus="onFocus"
      @search="onSearch"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const width = ref(180)
    const onBlur = () => {
      width.value = 180
    }
    const onFocus = () => {
      width.value = 300
    }
    const onSearch = () => {
      // search
    }

    return {
      width,
      onBlur,
      onFocus,
      onSearch
    }
  }
})
</script>
