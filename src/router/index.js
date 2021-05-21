/*
 路由器对象
 */

import Vue from "vue"
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      compoent:MSite
    },
    {
      path:'/search',
      compoent:Search
    },
    {
      path:'/order',
      compoent:Order
    },
    {
      path:'/profile',
      compoent:Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
