<template>
  <grid-item v-bind="item" v-on="$listeners">
    <div class="grid-editor-item">
      <span v-if="fetching"></span>
      <span v-else> my app {{ data }} </span>

      <a v-if="editable" class="grid-editor-item_close" href="javascript:;" @click="onClose">
        <a-icon type="delete" />
      </a>
    </div>
  </grid-item>
</template>
<script lang="ts">
import { GridItem } from 'vue-grid-layout'
import { defineComponent, toRefs, PropType, watch } from '@vue/composition-api'
import type { LayoutItem } from '../layout'
import { useBaseStaffQuery, useMyTodoForBpmnTasksConnectionQuery } from '@/graphql'

export default defineComponent({
  name: 'MyApp',
  components: { GridItem },
  props: {
    item: {
      type: Object as PropType<LayoutItem>,
      default: () => ({})
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { item } = toRefs(props)

    const variables = {
      id: 10
    }

    const { data, fetching } = useMyTodoForBpmnTasksConnectionQuery()

    watch(data, (newData) => {
      if (newData) {
        const value = newData.MyTodoForBpmnTasksConnection.edges

        const arr = value.map((item) => item.node)
      }

      console.log(newData)
    })

    const onClose = () => {
      emit('close', { key: item.value.i })
    }

    return {
      data,
      fetching,
      onClose
    }
  }
})
</script>
