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
        component: My
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
        path: '/',
        redirect: 'home',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
