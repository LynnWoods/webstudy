import Vue from 'vue'
import App from './App'
import './styles/common.less'


Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
