import './index.less'
import HeaderLayout from './HeaderLayout.vue'

import { defineComponent, provide } from '@vue/composition-api'

import menus from './menus'
import apps from '@/micro/apps'

export default defineComponent({
  setup() {
    provide('menus', menus)
    provide('apps', apps)
  },
  render() {
    return <HeaderLayout></HeaderLayout>
  }
})
