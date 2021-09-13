import Vue from 'vue'
import { message } from 'ant-design-vue'
import { registerMicroApps, addGlobalUncaughtErrorHandler, start, RegistrableApp } from 'qiankun'
import { KeycloakInstance } from '@dsb-norge/vue-keycloak-js/dist/types'

// 子应用注册信息
import apps from './apps'

type MicroAppProps = { keycloak?: KeycloakInstance }

export default function (): void {
  apps.forEach((app: RegistrableApp<MicroAppProps>) => {
    app.props = {
      keycloak: Vue.prototype.$keycloak
    }
  })

  /**
   * 注册子应用
   */
  registerMicroApps(apps, {
    // qiankun 生命周期钩子 - 加载前
    beforeLoad: (app) => {
      console.log('before load', app.name)
      return Promise.resolve()
    },
    // qiankun 生命周期钩子 - 挂载后
    afterMount: (app) => {
      console.log('after mount', app.name)
      return Promise.resolve()
    }
  })

  start()

  /**
   * 添加全局的未捕获异常处理器
   */
  addGlobalUncaughtErrorHandler((event: string | Event) => {
    console.error(event)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { message: msg } = event as any
    // 加载失败时提示
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
      message.error('子应用加载失败，请检查应用是否可运行')
    }
  })
}
