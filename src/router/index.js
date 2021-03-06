import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页
import Home from './../views/Home.vue'
// 收藏
import Star from './../views/Star.vue'
// 类别
import Category from './../views/Category.vue'
// 我的
import My from './../views/My.vue'
// 地点详情
import Detail from './../views/Detail.vue'
// 酒店列表
import HotelList from './../views/HotelList'
// 搜索页
import Search from './../views/Search'
// 登录
import Login from './../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/star',
    name: 'Star',
    component: Star
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/my',
    name: 'My',
    component: My,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      }
    ],
  },
  {
    path: "/detail/:id",
    name: 'Detail',
    component: Detail
  },
  {
    path: "/hotellist/:id",
    name: 'HotelList',
    component: HotelList
  },
  {
    path: "/search/",
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    redirect: 'home',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if(to.path == "/my"){
    let {token} = router.app.$options.store.state;
    // 如果token存在就放行，否则跳转到登录页
    if(token){
      next();
    }else {
      console.log("没有token，进入登录")
      next({path:'/my/login'})
    }
  }else {
    next()
  }
})

export default router
