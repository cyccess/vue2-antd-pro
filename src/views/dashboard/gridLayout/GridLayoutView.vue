<template>
  <div class="home-layout-content_inner">
    <div class="home-layout-content_body">
      <div class="home-layout-content_body_inner">
        <div class="grid-guide">
          <div class="grid-guide-op">
            <a-dropdown overlay-class-name="grid-guide-menu" :trigger="['click']">
              <a class="layout-dropdown" @click="(e) => e.preventDefault()">
                {{ localLayout === 'default' ? '默认视图' : '自定义视图' }} <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item :class="{ selected: localLayout === 'default' }" @click="onLayoutChange('default')">
                  <a-icon type="check" />
                  <a href="javascript:;">默认视图</a>
                </a-menu-item>
                <a-menu-item :class="{ selected: localLayout === 'custom' }" @click="onLayoutChange('custom')">
                  <a-icon type="check" />
                  <a href="javascript:;">自定义视图</a>
                  <span class="grid-guide-menu_op" @click.stop="onEdit">
                    <a-button title="编辑视图" type="link" class="grid-guide-menu_op__btn">
                      <a-icon type="edit" />
                    </a-button>
                  </span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
        <div class="grid-wrap">
          <div v-if="layout.length === 0" class="gridlayout-status">
            <a-empty />
          </div>
          <grid-layout
            v-else
            :layout="layout"
            :col-num="3"
            :cols="{ lg: 3, md: 3, sm: 1, xs: 1, xxs: 1 }"
            :row-height="30"
            :margin="[20, 20]"
            :is-draggable="draggable"
            :is-resizable="resizable"
            :responsive="responsive"
          >
            <component :is="item.i" v-for="item in layout" :key="item.i" :item="item" />
          </grid-layout>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watchEffect, PropType } from '@vue/composition-api'
import { GridLayout } from 'vue-grid-layout'
import * as components from '../widgets'

import type { LayoutItem, LocalLayout } from '../layout'

export default defineComponent({
  name: 'GridLayoutView',
  components: {
    GridLayout,
    ...components
  },
  props: {
    defaultLayout: {
      type: Array as PropType<LayoutItem[]>,
      default: () => []
    },
    selectedLayout: {
      type: Array as PropType<LayoutItem[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const { defaultLayout, selectedLayout } = toRefs(props)

    const localLayout = ref<LocalLayout>('default')
    const layout = ref<LayoutItem[]>([])

    const local_layout = localStorage.getItem('local_layout')
    if (local_layout) {
      localLayout.value = local_layout as LocalLayout
    }

    watchEffect(() => {
      if (localLayout.value === 'custom') {
        layout.value = selectedLayout.value
      } else {
        layout.value = defaultLayout.value
      }
    })

    const onLayoutChange = (_localLayout: LocalLayout) => {
      localLayout.value = _localLayout
      layout.value = _localLayout === 'custom' ? selectedLayout.value : defaultLayout.value
      localStorage.setItem('local_layout', _localLayout)
    }

    const onEdit = () => {
      onLayoutChange('custom')
      emit('edit')
    }

    const draggable = false
    const resizable = false
    const responsive = false

    return {
      layout,
      draggable,
      resizable,
      responsive,
      localLayout,
      onLayoutChange,
      onEdit
    }
  }
})
</script>
