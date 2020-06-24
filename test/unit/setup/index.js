import Vue from 'vue'
import Vuex from 'vuex'

import MockComponents from './mock-vue-components'

MockComponents.forEach(MockComponent => Vue.component(MockComponent.name, MockComponent))

// Stub out a translation function
Vue.prototype.$d = key => key
Vue.prototype.$t = key => key
Vue.prototype.$tc = key => key
Vue.prototype.$n = key => key
Vue.prototype.localePath = key => key
Vue.prototype.$validator = key => key

Vue.use(Vuex)
