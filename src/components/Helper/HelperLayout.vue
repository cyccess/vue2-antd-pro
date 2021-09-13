<template>
  <div class="xn-widget">
    <div class="xn-widget-inner">
      <div class="widget-help">
        <div class="xn-help-support" @click="onSupport">
          <div class="help-btn_inner">
            <i class="help-btn_icon"></i>
            <span class="help-btn_text">支持</span>
          </div>
        </div>
      </div>
    </div>
    <a-modal
      title="支持"
      :mask="false"
      :width="360"
      :dialog-style="{ position: 'fixed', right: '60px', bottom: '200px', top: 'initial' }"
      :visible="visible"
      @cancel="onSupport"
    >
      <span class="service-phone">服务电话：88210079（马韬，15086669690）</span>

      <template #footer>
        <a-button type="default" @click="onSupport">关闭</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HelperLayout',
  setup() {
    const visible = ref(false)

    const onSupport = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      onSupport
    }
  }
})
</script>
