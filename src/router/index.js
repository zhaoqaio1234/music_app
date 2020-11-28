
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../views/Recommend'
// import Rank from '@/views/Rank'
// import Search from '@/views/Search'
// import Singer from '@/views/Singer'


Vue.use(VueRouter)

const Recommend = (resolve) => {
  import('../views/Recommend').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer').then((module) => {
    resolve(module)
  })
}

const routes = [
  { path: '/', redirect: 'recommend' },
  { path: '/recommend', component: Recommend },
  { path: '/rank', component: Rank },
  { path: '/search', component: Search },
  { path: '/singer', componen: Singer },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
