import Vue, { VueConstructor } from 'vue'
import { getCurrentInstance } from '@vue/composition-api'
import { Client, ClientOptions } from '@urql/core'

export function provideClient(opts: ClientOptions | Client) {
  const client = opts instanceof Client ? opts : new Client(opts)

  // provide('$urql', client)

  const reactiveObj = Vue.observable(client)
  Object.defineProperty(Vue.prototype, '$urql', {
    get() {
      return reactiveObj
    }
  })

  return client
}

export function install(app: VueConstructor, opts: ClientOptions | Client) {
  const client = opts instanceof Client ? opts : new Client(opts)

  // app.provide('$urql', client)

  const reactiveObj = app.observable(client)
  Object.defineProperty(app.prototype, '$urql', {
    get() {
      return reactiveObj
    }
  })
}

export function useClient(): Client {
  if (process.env.NODE_ENV !== 'production' && !getCurrentInstance()) {
    throw new Error('use* functions may only be called during the `setup()` or other lifecycle hooks.')
  }

  // const client = inject('$urql') as Client
  const client = Vue.prototype.$urql

  if (process.env.NODE_ENV !== 'production' && !client) {
    throw new Error(
      'No urql Client was provided. Did you forget to install the plugin or call `provideClient` in a parent?'
    )
  }

  return client
}
