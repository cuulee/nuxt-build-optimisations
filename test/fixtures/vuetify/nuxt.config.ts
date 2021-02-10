import { NuxtConfig } from '@nuxt/types'
import nuxtBuildOptimisations from '../../../src'

const config : NuxtConfig = {
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    nuxtBuildOptimisations
  ],
  buildOptimisations: {
    profile: 'risky'
  }
}

export default config
