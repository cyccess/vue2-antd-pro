<template>
  <div class="home-index">
    <main class="home-layout-content" :class="[editable ? 'gridlayout-home' : 'grid-view']">
      <div v-if="fetching" class="grid-layout-apinning">
        <a-spin :spinning="fetching" />
      </div>
      <template v-else>
        <grid-layout-edit
          v-if="editable"
          :default-layout="defaultLayout"
          :selected-layout="layout"
          :widget-list="widgetList"
          @cancel="onCancel"
          @ok="onChange"
        ></grid-layout-edit>

        <grid-layout-view
          v-else
          :default-layout="defaultLayout"
          :selected-layout="layout"
          @edit="onEdit"
        ></grid-layout-view>
      </template>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from '@vue/composition-api'
import { GridLayoutEdit, GridLayoutView } from './gridLayout'

import gridLayout, { LayoutList } from './layout'
import useLayoutRepositories from './useLayoutRepositories'

export default defineComponent({
  name: 'Workplace',
  components: {
    GridLayoutEdit,
    GridLayoutView
  },
  setup() {
    const defaultLayout = ref(gridLayout)
    const editable = ref(false)

    const { data, fetching } = useLayoutRepositories()
    const { layout, widgetList } = toRefs(data)

    const onChange = ({ layout: _layout, widgetList: _widgetList }: LayoutList) => {
      widgetList.value = _widgetList
      layout.value = _layout
      editable.value = false
    }

    const onEdit = () => {
      editable.value = true
    }

    const onCancel = () => {
      editable.value = false
    }

    return {
      defaultLayout,
      layout,
      widgetList,
      editable,
      fetching,
      onEdit,
      onChange,
      onCancel
    }
  }
})
</script>
