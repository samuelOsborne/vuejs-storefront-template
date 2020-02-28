import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router/routes";
import App from "./App"
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/global.scss'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
});

new Vue({
    render: h => h(App),
    el: '#app',
    router: Router
}).$mount('#app');
