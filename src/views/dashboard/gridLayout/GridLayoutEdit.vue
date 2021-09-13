<template>
  <div class="home-layout-content_inner">
    <div class="home-layout-content_body">
      <div class="home-layout-content_body_inner">
        <div class="girdlayout-header">
          <div class="girdlayout-header_name">自定义视图</div>
          <div class="girdlayout-header_tips">请选择自定义显示的内容，或调整适合的卡片位置</div>
          <div class="girdlayout-header_op">
            <a-button type="primary" @click="onSave">保存</a-button>
            <a-button @click="onCancel">取消</a-button>
          </div>
        </div>
        <div class="girdlayout-slider">
          <ul class="girdlayout-slider-list">
            <li v-for="item in widgets" :key="item.key">
              <a-checkbox :checked="item.type === 1" @change="onWidgetCheck(item)">
                {{ item.label }}
              </a-checkbox>
            </li>
          </ul>
        </div>
        <div class="girdlayout-content">
          <div class="gridlayout-content-inner" style="position: relative; min-width: 1220px; max-width: 1330px">
            <div v-if="layout.length === 0" class="gridlayout-status">
              <a-empty>
                <div slot="description">
                  <p>暂无小部件</p>
                  <p>请从左侧选择内容呈现</p>
                </div>
              </a-empty>
            </div>
            <grid-layout
              v-else
              :layout.sync="layout"
              :col-num="3"
              :row-height="30"
              :margin="[20, 20]"
              :is-draggable="draggable"
              :is-resizable="resizable"
              @layout-mounted="layoutMountedEvent"
              @layout-updated="layoutUpdatedEvent"
            >
              <component
                :is="item.i"
                v-for="item in layout"
                :key="item.i"
                :item="item"
                :editable="true"
                @move="moveEvent"
                @moved="movedEvent"
                @close="onWidgetCheck"
              ></component>
            </grid-layout>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, onMounted, ref, PropType } from '@vue/composition-api'
import clonedeep from 'lodash.clonedeep'
import { addClass, removeClass, hasClass } from './_DOM'
import { GridLayout } from 'vue-grid-layout'
import * as components from '../widgets'

import type { LayoutItem, Widget } from '../layout'

const defaultWidgets = [
  { label: '用户信息', key: 'user-info', type: 2 },
  { label: '待办事项', key: 'todo', type: 2 },
  { label: '常用', key: 'my-app', type: 2 },
  { label: '其他', key: 'other', type: 2 }
]

export default defineComponent({
  name: 'GridLayoutEdit',
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
    },
    widgetList: {
      type: Array as PropType<Widget[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const { defaultLayout, widgetList, selectedLayout } = toRefs(props)

    const layout = ref<LayoutItem[]>(clonedeep(selectedLayout.value))
    const cacheLayout = ref<LayoutItem[]>(clonedeep(selectedLayout.value))

    const widgets = widgetList.value.reduce((acc, cur) => {
      const entry = acc.find((w) => w.key === cur.key)
      Object.assign(entry, cur)
      return acc
    }, defaultWidgets)

    const draggable = true
    const resizable = false

    let $placeholder: Element

    onMounted(() => {
      document.body.className = 'girdlayout-hide-header'
    })

    const layoutMountedEvent = () => {
      $placeholder = document.getElementsByClassName('vue-grid-placeholder')[0]
    }

    const layoutUpdatedEvent = (newLayout: LayoutItem[]) => {
      cacheLayout.value = clonedeep(newLayout)
      // console.log('Updated layout: ', newLayout)
    }

    const removable = (disable: boolean) => {
      if (!disable) {
        if (!hasClass($placeholder, 'is-error')) {
          addClass($placeholder, 'is-error')
        }
      } else {
        removeClass($placeholder, 'is-error')
      }
    }

    const moveEvent = (i: string, newX: number) => {
      const layoutItem = cacheLayout.value.find((l: LayoutItem) => l.i === i)
      if (layoutItem && layoutItem.w === 2) {
        removable(layoutItem.x === newX)
      }
      // console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    }

    const movedEvent = (i: string, newX: number) => {
      const layoutItem = cacheLayout.value.find((l: LayoutItem) => l.i === i)
      if (layoutItem && layoutItem.w === 2 && layoutItem.x !== newX) {
        layout.value = clonedeep(cacheLayout.value)
        removable(true)
      }
    }

    const onWidgetCheck = ({ key }: { key: string }) => {
      const index = layout.value.findIndex((ly: LayoutItem) => ly.i === key)
      if (index > -1) {
        layout.value.splice(index, 1)
      } else {
        const entry = defaultLayout.value.find((ly: LayoutItem) => ly.i === key)
        layout.value.push({ ...entry })
      }

      const widget = widgets.find((w) => w.key === key)
      if (widget) {
        widget.type = index > -1 ? 2 : 1
      }
    }
    const onSave = () => {
      document.body.className = ''
      // 缓存自定义视图，布局渲染根据此值判断
      localStorage.setItem('local_layout', 'custom')
      emit('ok', { layout, widgets })
    }
    const onCancel = () => {
      document.body.className = ''
      emit('cancel')
    }

    return {
      layout,
      widgets,
      draggable,
      resizable,
      layoutMountedEvent,
      layoutUpdatedEvent,
      moveEvent,
      movedEvent,
      onWidgetCheck,
      onSave,
      onCancel
    }
  }
})
</script>
