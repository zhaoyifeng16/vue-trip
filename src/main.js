import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant
import Vant, {Lazyload} from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Lazyload, {
  loading: require('./assets/loading1.gif'),
  lazyComponent: true,
});

// reset.css
import "./style/font.css";
import "./style/reset.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
