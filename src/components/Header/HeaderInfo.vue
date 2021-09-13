<template>
  <a-dropdown placement="bottomRight">
    <span class="action ant-dropdown-link user-dropdown-menu">
      <!-- <a-avatar class="avatar" size="small" :src="avatar()" /> -->
      <span>小城时光</span> <a-icon type="caret-down" />
    </span>
    <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
      <a-menu-item key="1">
        <a-icon type="setting" />
        <span>账户设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3">
        <a href="javascript:;" @click="handleLogout">
          <a-icon type="logout" />
          <span>退出登录</span>
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root }) {
    const { $store, $confirm, $keycloak } = root

    const handleLogout = () => {
      $confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          $store.dispatch('logout')
          return $keycloak.logoutFn && $keycloak.logoutFn()
        }
      })
    }

    return {
      handleLogout
    }
  }
})
</script>
