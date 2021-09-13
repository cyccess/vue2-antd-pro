<template>
  <grid-item v-bind="item" v-on="$listeners">
    <div class="grid-editor-item">
      todo
      <a v-if="editable" class="grid-editor-item_close" href="javascript:;" @click="onClose">
        <a-icon type="delete" />
      </a>
    </div>
  </grid-item>
</template>
<script>
import { GridItem } from 'vue-grid-layout'
// import { test } from '@/api'
export default {
  name: 'Todo',
  components: { GridItem },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  async mounted() {
    // const res = await test()
    // console.log('test', res)
  },
  methods: {
    onClose() {
      this.$emit('close', { key: this.item.i })
    }
  }
}
</script>
