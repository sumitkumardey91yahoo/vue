import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/restAPI'
import getName from '@/components/name'
import player from '@/components/player'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/names',
      name: 'name',
      component: getName
    },
    {
      path: '/player',
      name: 'player',
      component: player
    }
  ],
  mode: 'history'
})
