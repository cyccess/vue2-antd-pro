import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueComposition from '@vue/composition-api'
import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
import { provideClient, dedupExchange, cacheExchange, debugExchange, errorExchange, fetchExchange } from './vue-urql'
import startQiankun from './micro'

import type { KeycloakInstance } from 'keycloak-js'

import './global.less' // global style
import './core/antd_use'

import { notification } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(VueComposition)
Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    // onLoad: 'login-required',
    checkLoginIframe: false, //防止登陆后重复刷新

    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
  },
  // logout: {
  //   redirectUri: location.origin
  // },
  config: {
    url: process.env.VUE_APP_CLIENT_URL,
    clientId: process.env.VUE_APP_CLIENT_ID,
    realm: 'xndb'
  },
  onReady(keycloak: KeycloakInstance) {
    console.log('Keycloak ready', keycloak)
    startQiankun()

    provideClient({
      url: '/graphql',
      fetchOptions: () => {
        const token = keycloak.token
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
    })
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#main-app')
