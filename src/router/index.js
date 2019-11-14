import Vue from 'vue'
import Router from 'vue-router'

// import routes(lazy)
const ListNotes = () => import('@/views/ListNotes/index.vue')
const CreateNote = () => import('@/views/CreateNote/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list-notes',
      component: ListNotes
    },
    {
      path: '/create',
      name: 'create-note',
      component: CreateNote
    },
    {
      path: '/about/:id',
      name: 'edit-note',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
