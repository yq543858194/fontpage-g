import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import {Carousel, CarouselItem, Button, Popover, Dialog, Slider,
  Table, TableColumn, Divider, Timeline, TimelineItem, Card,
  Row, Col, Upload, Input, DatePicker, Select, Option, Checkbox,
  Form, FormItem} from 'element-ui'
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
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);

new Vue({
  router,
  store,
  render: h => h(App),
  updated () {
    console.log('app updated');
  }
}).$mount('#app');
