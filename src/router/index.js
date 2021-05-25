import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: HelloWorld,
      children:[
        {
          path: 'initMsg',
          component:()=>import('@/components/initMsg.vue'),
        },
        {
          path: 'userMsg',
          component:()=>import('@/components/userMsg'),
        },
      ]
    }
  ]
})
