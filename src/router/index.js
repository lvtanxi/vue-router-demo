import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import NameParam from '@/components/NameParam'
import ParamsParam from '@/components/ParamsParam'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hi2,
        left: Hi1,
        right: Hello
      }
    },{
      path: '/Hi',
      component: Hi,
      children:[ //这里有一个小坑，子路由不能配置/
        {
          path: 'hi1',
          component: Hi1
        },
        {
          path: 'hi2',
          component: Hi2
        }
      ]
    },
    {
      path: '/nameParam',
      name: '我是通过name传递的参数',
      component: NameParam
    },
    {
      path: '/paramsParam',
      name: 'paramsParam',
      component: ParamsParam
    },
       {
      path: '/jspang',
      components: {
        default: Hi1,
        left: Hi2,
        right: Hello
      }
    }
  ]
})
