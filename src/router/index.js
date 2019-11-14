import Vue from 'vue'
import Router from 'vue-router'

// import routes(lazy)
const ListNotes = () => import('@/views/ListNotes/index.vue')
const CreateNote = () => import('@/views/CreateNote/index.vue')
const EditNote = () => import('@/views/EditNote/index.vue')

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
      path: '/edit/:id',
      name: 'edit-note',
      component: EditNote
    }
  ]
})
