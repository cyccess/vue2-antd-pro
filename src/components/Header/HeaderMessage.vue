<template>
  <a href="javascript:;" class="action" @click="showDrawer">
    <a-icon type="bell" />
    <a-badge count="15" />

    <a-drawer
      placement="right"
      :visible="visible"
      :width="360"
      :wrap-style="{ top: '50px' }"
      :body-style="{ paddingTop: 0 }"
      :mask="false"
      @close="onClose"
    >
      <template #title>
        <span>消息中心</span>
        <a href="" class="header-message-more">更多站内消息</a>
      </template>
      <ul class="header-message-list">
        <ul>
          <li class="message-list-item">
            <div class="message-list-item_inner">
              <span class="message-list-item_text">提醒-工作提醒</span>
              <span class="message-list-item_time">2021.08.16 16:00</span>
            </div>
            <a href="/">（文书移交）的（文书移交）有最新动态，请查收！</a>
          </li>
          <li class="message-list-item">
            <div class="message-list-item_inner">
              <span class="message-list-item_text">提醒-工作提醒</span>
              <span class="message-list-item_time">2021.08.16 16:00</span>
            </div>
            <a href="/">（文书移交）的（文书移交）有最新动态，请查收！</a>
          </li>

          <li class="message-list-item">
            <div class="message-list-item_inner">
              <span class="message-list-item_text">提醒-工作提醒</span>
              <span class="message-list-item_time">2021.08.16 16:00</span>
            </div>
            <a href="/">（文书移交）的（文书移交）有最新动态，请查收！</a>
          </li>
        </ul>
      </ul>
    </a-drawer>
  </a>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const showDrawer = () => {
      visible.value = true
    }
    const onClose = () => {
      visible.value = false
    }

    return {
      visible,
      showDrawer,
      onClose
    }
  }
})
</script>
