<template>
  <div class="xn-header-nav">
    <div class="layout-header-title">
      <header-logo></header-logo>

      <a class="home-nav" href="javascript:;" @click.stop="onHomeNav">
        <a-icon type="home" />
        <span>工作台</span>
      </a>
      <a-divider type="vertical" />
    </div>

    <div class="layout-header-center">
      <header-menu></header-menu>
      <header-search></header-search>
    </div>

    <div class="layout-header-opration">
      <!-- <span class="action">
        <span class="service-phone">服务电话：88210079（马韬，15086669690）</span>
      </span> -->

      <header-message></header-message>

      <a-tooltip title="帮助">
        <a href="http://help.cqxndb.com/" target="_blank" class="action">
          <a-icon type="question-circle-o" />
        </a>
      </a-tooltip>

      <header-theme></header-theme>
      <header-screenfull></header-screenfull>
      <header-link></header-link>
      <header-info></header-info>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import HeaderLogo from './HeaderLogo.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderMessage from './HeaderMessage.vue'
import HeaderLink from './HeaderLink.vue'
import HeaderTheme from './HeaderTheme.vue'
import HeaderScreenfull from './HeaderScreenfull.vue'
import HeaderInfo from './HeaderInfo.vue'

export default defineComponent({
  components: {
    HeaderLogo,
    HeaderMenu,
    HeaderSearch,
    HeaderMessage,
    HeaderLink,
    HeaderTheme,
    HeaderScreenfull,
    HeaderInfo
  },
  setup(props, { root }) {
    const { $router } = root
    const onHomeNav = () => {
      $router.push({ path: '/' }).catch((err) => err)
    }

    return {
      onHomeNav
    }
  }
})
</script>
