import { createRouter, createWebHistory } from 'vue-router'
import PersonsListView from '../views/PersonsListView.vue'
import NewPersonView from '../views/NewPersonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/persons'
    },
    {
      path: '/persons',
      name: 'persons',
      component: PersonsListView,
      props: {
        title: 'List of Persons'
      }
    },
    {
      path: '/new-person',
      name: 'new-person',
      component: NewPersonView,
      props: {
        title: 'New Person'
      }
    }
  ]
})

export default router