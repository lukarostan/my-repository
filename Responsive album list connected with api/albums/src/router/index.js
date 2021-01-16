import Vue from 'vue'
import VueRouter from 'vue-router'
import albumList from '../views/albumList.vue'
import artist from '../views/artist.vue'
import notFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'albumList',
    component: albumList
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: artist
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    component: notFound
  }
]

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
