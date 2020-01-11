import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import './assets/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import {Carousel, CarouselItem, Button, Popover, Dialog, Slider, Table, TableColumn, Divider} from 'element-ui'
import 'video.js/dist/video-js.min.css'
import VideoJs from 'video.js'

Vue.config.productionTip = false;
Vue.prototype.$video = VideoJs;

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Slider);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Divider);

new Vue({
  router,
  store,
  render: h => h(App),
  updated () {
    console.log('app updated');
  }
}).$mount('#app');
