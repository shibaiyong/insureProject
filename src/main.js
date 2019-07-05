// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '@/assets/css/common.css'
import '@/assets/utils/ajustScreen.js'
//按需引入 借助 babel-plugin-component
import { Button, Picker, DatetimePicker, Field, Checklist, Lazyload, Loadmore, IndexList, IndexSection, Cell, Header } from 'mint-ui'
//以下是mint-ui完整引入
//import MintUI from 'mint-ui'
//Vue.use(MintUI)
Vue.component(Button.name, Button)
// Vue.component(Picker.name, Picker)
// Vue.component(DatetimePicker.name, DatetimePicker)
// Vue.component(Field.name, Field)
// Vue.component(Checklist.name, Checklist)
// Vue.component(Loadmore.name, Loadmore)
// Vue.component(IndexList.name, IndexList)
// Vue.component(IndexSection.name, IndexSection)
// Vue.component(Cell.name, Cell)
// Vue.use(Lazyload)
Vue.component(Header.name, Header);


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
