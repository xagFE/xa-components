import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import popup from '@/components/popup'
import cells from '@/components/cells'
import ripple from '@/components/ripple'
import circular from '@/components/circular'
import toast from '@/components/toast'
import tab from '@/components/tab'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/popup',
    name: 'popup',
    component: popup
  },
  {
    path: '/cells',
    name: 'cells',
    component: cells
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: ripple
  },
  {
    path: '/circular',
    name: 'circular',
    component: circular
  },
  {
    path: '/toast',
    name: 'toast',
    component: toast
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: require('@/components/buttons')
  }
]

export const router = new Router({ routes })
