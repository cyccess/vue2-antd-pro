<template>
  <a-dropdown placement="bottomRight">
    <a class="ant-dropdown-link action" @click="(e) => e.preventDefault()"> 常用网址 <a-icon type="caret-down" /> </a>
    <a-menu slot="overlay">
      <a-menu-item v-for="item in links" :key="item.url">
        <a v-if="item.title === '天眼查'" href="javascript:;" @click="querySerch"
          ><a-icon type="book" /> {{ item.title }}</a
        >
        <a v-else :href="item.url" target="_blank"><a-icon type="book" /> {{ item.title }}</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderLink',
  setup() {
    const links = [
      { title: '天眼查', url: '/customer/api/customers/tyUrl/' },
      { title: '最高人民法院', url: 'http://www.court.gov.cn/' },
      { title: '中国外滩交易中心', url: 'http://www.chinamoney.com.cn/chinese/' },
      { title: '中国债券信息网', url: 'https://www.chinabond.com.cn/' },
      { title: '上海证券交易所', url: 'http://www.sse.com.cn/' }
    ]

    const querySerch = async () => {
      const url = `customer/api/customers/tyUrl`
      const res = await this.axios.get(url)
      const { code, data } = res
      if (code === 200) {
        const link = document.createElement('a')
        link.style.display = 'none'
        link.target = '_blank'
        link.href = data
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }

    return {
      links,
      querySerch
    }
  }
})
</script>
