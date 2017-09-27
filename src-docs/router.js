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
    component: popup,
    meta: {
      title: 'popup',
      desc: '基础弹出层'
    }
  },
  {
    path: '/cells',
    name: 'cells',
    component: cells,
    meta: {
      title: 'cells',
      desc: ''
    }
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: ripple,
    meta: {
      title: 'ripple',
      desc: '水波纹'
    }
  },
  {
    path: '/circular',
    name: 'circular',
    component: circular,
    meta: {
      title: 'circular',
      desc: ''
    }
  },
  {
    path: '/toast',
    name: 'toast',
    component: toast,
    meta: {
      title: 'toast',
      desc: ''
    }
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab,
    meta: {
      title: 'tab',
      desc: '选项卡'
    }
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: require('@/components/buttons'),
    meta: {
      title: 'buttons',
      desc: '按钮组、按钮'
    }
  },
  {
    path: '/infiniteScroll',
    name: 'infiniteScroll',
    component: require('@/components/infiniteScroll'),
    meta: {
      title: 'infiniteScroll',
      desc: '无限加载'
    }
  },
  {
    path: '/refreshControl',
    name: 'refreshControl',
    component: require('@/components/refreshControl'),
    meta: {
      title: 'refreshControl',
      desc: '下拉刷新'
    }
  },
  {
    path: '/picker',
    name: 'picker',
    component: require('@/components/picker'),
    meta: {
      title: 'picker',
      desc: ''
    }
  },
  {
    path: '/datePicker',
    name: 'datePicker',
    component: require('@/components/datePicker'),
    meta: {
      title: 'datePicker',
      desc: '时间选择器'
    }
  },
  {
    path: '/input',
    name: 'input',
    component: require('@/components/input'),
    meta: {
      title: 'input',
      desc: '输入框、表单'
    }
  },
  {
    path: '/tabBar',
    name: 'tabBar',
    component: require('@/components/tabBar'),
    meta: {
      title: 'tabBar'
    }
  },
  {
    path: '/radio',
    name: 'radio',
    component: require('@/components/radio'),
    meta: {
      title: 'radio'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: require('@/components/search'),
    meta: {
      title: 'search'
    }
  }
]

export const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'xa-components'
  next()
})
