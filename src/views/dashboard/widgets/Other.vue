<template>
  <grid-item v-bind="item" v-on="$listeners">
    <div class="grid-editor-item">
      other
      <a v-if="editable" class="grid-editor-item_close" href="javascript:;" @click="onClose">
        <a-icon type="delete" />
      </a>
    </div>
  </grid-item>
</template>
<script>
import { GridItem } from 'vue-grid-layout'
export default {
  name: 'Other',
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
  methods: {
    onClose() {
      this.$emit('close', { key: this.item.i })
    }
  }
}
</script>
