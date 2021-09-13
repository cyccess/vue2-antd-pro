import Vue from 'vue'
import { createClient, fetchExchange, dedupExchange, cacheExchange, errorExchange, debugExchange } from '@urql/core'
import { notification } from 'ant-design-vue'

interface Vue2App {
  prototype?: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  observable?: any
}

const urqlOptions = {
  url: '/graphql',
  fetchOptions: () => {
    const token = Vue.prototype.$keycloak.token
    return {
      headers: { Authorization: token ? `Bearer ${token}` : '' }
    }
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    debugExchange,
    errorExchange({
      onError: (error) => {
        notification.error({
          message: '请求出错',
          description: '接口调用错误'
        })
        console.log('An error!', error)
      }
    }),
    fetchExchange
  ]
}

const client = createClient(urqlOptions)

export { client as Urql }

export default {
  install(app: Vue2App) {
    const reactiveObj = app.observable(client)
    Object.defineProperty(app.prototype, '$urql', {
      get() {
        return reactiveObj
      }
    })
  }
}
