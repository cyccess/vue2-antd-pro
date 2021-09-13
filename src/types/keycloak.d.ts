import type { VueKeycloakInstance } from '@dsb-norge/vue-keycloak-js/dist/types'

declare module 'vue/types/vue' {
  interface Vue {
    $keycloak: VueKeycloakInstance
  }
}
