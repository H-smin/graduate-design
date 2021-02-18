import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/shopcart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const StyleMatch = () => import('../views/style/StyleMatch')
const AllOrders = () => import('../views/allorders/AllOrders')
const ToUserInfo = () => import('../views/userinfo/ToUserInfo')
const Season = () => import('../views/style/stylerouter/Season')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    name: 'StyleMatch',
    path: '/styleMatch',
    component: StyleMatch
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/shopcart',
    component: Cart
  },
  {
    name: 'Detail',
    path: '/detail',
    component: Detail,
  },
  {
    name: 'AllOrders',
    path: '/allorders',
    component: AllOrders
  },
  { 
    name:'ToUserInfo ',
    path: '/userinfo',
    component:ToUserInfo,
  },
  {
    name:"Season",
    path:'/stylerouter',
    component:Season
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
