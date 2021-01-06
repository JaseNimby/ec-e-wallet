import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      cardInfo: [{
        number: "3456 678 8765",
        name: "Hejsan Svejsan",
        month: "09",
        year: "2021",
        vendor: "evil",
      }, {
        number: "3456 678 8765",
        name: "Jaha Då",
        month: "03",
        year: "2023",
        vendor: "blockchain",
      }, {
        number: "3456 678 8765",
        name: "Nejmen Se Där",
        month: "02",
        year: "2024",
        vendor: "ninja",
      },],

    }
  },
  render: h => h(App)
}).$mount('#app')
