import VueRouter from 'vue-router'
import App from '../components/app.vue'
import Child from '../components/child.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/:biz/:page',
        component: Child
      }
    ]
  }
]

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})
