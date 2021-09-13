<template>
  <div class="header-nav">
    <a-menu mode="horizontal" class="nav-menu" @click="onChange">
      <a-menu-item v-for="item in menus" :key="item.name"><a-icon :type="item.icon" />{{ item.title }}</a-menu-item>

      <a-menu-item key="apply">
        <a-button :class="['link']" type="link">起草申请</a-button>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root }) {
    const apps = inject('apps')
    const menus = inject('menus').slice(1)

    const onChange = ({ key }) => {
      if (key === 'apply') return
      const item = apps.find((a) => a.name === key)
      root.$router.push(item.activeRule)
    }

    return {
      menus,
      onChange
    }
  }
})
</script>
