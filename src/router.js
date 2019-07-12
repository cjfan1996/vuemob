import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from './components/phone/login'
import reg from './components/phone/reg'
import home from './components/phone/home'
import news from './components/phone/news'
 import list from './components/phone/list'
 import product_list from './components/phone/product_list'
 import details from './components/phone/details'
 import navbar from './components/phone/navbar'
 import cart from './components/phone/cart'
 import mine from './components/phone/mine'
export default new Router({
  routes: [
    // {path:'/',component:HelloContainer}, 
   {path:'/login',component:login},
   {path:'/reg',component:reg},
   {path:'/home',component:home},
   {path:'/news',component:news},
   {path:'/list',component:list},
   {path:'/product_list',component:product_list},
   {path:'/details',component:details},
   {path:'/navbar',component:navbar},
   {path:'/cart',component:cart},
   {path:'/mine',component:mine},
   {path:'/navbar/:id',component:navbar,props:true}

  //  {path:'/movieDetail/:movieId',name:'movieDetail',component:movieDetail}
  ]
})
