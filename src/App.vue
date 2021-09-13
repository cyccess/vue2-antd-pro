<template>
  <a-config-provider :locale="locale">
    <div class="page-layout">
      <top-header></top-header>
      <section class="xn-layout">
        <div class="xn-layout-content">
          <div id="xn-web-content">
            <div class="layout-container-main-body">
              <router-view v-show="$route.name" />
            </div>
          </div>
          <div v-show="!$route.name" id="xn-micro"></div>
        </div>
      </section>
      <helper></helper>
    </div>
  </a-config-provider>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
import TopHeader from '@/components/Header'
import Helper from '@/components/Helper'

export default defineComponent({
  components: { TopHeader, Helper },
  setup() {
    return {
      locale: zh_CN
    }
  }
})
</script>
