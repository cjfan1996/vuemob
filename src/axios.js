//src/axios.js
//引入axios库并且配置
import Vue from 'vue'
import axios from 'axios'
axios.defaults.withCredentials=true
axios.defaults.baseURL="http://127.0.0.1:3000/"
Vue.prototype.axios=axios