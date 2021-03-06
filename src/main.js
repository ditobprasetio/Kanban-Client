import Vue from 'vue'
import App from './App.vue'
import GSignInButton from 'vue-google-signin-button'
import Toasted from 'vue-toasted'

Vue.use(GSignInButton)
Vue.use(Toasted, {
  theme: 'bubble',
  position: 'top-center'
})

new Vue({
  render: h => h(App),
}).$mount('#app');