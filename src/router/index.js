import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import NameParam from '@/components/NameParam'
import ParamsParam from '@/components/ParamsParam'
import UrlParam from '@/components/UrlParam'
import RedirectTest from '@/components/RedirectTest'
import AliasJup from '@/components/AliasJup'
import Error from '@/components/Error'

Vue.use(Router);
/**
 *mode的两个值
*histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！
*hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
 */
export default new Router({
  mode: 'history',
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
    },
       {
      path: '/urlParam/:newsId/:newsTitle', //这可以添加正则表达式
      component: UrlParam,
      beforeEnter(to,from,next){ //路由钩子函数
          console.log(to,from)
          next()  //让跳转继续，需要拦截就在这里处理，也可以传递next(true),next({path:'/'})
      }
    },
       {
      path: '/goRedirectTest',
      component: RedirectTest
    },{
      path:'/goRedirect',
      redirect:'/goRedirectTest'
    },{
      path:'/goRedirectParam/:newsId/:newsTitle',
      redirect:'/urlParam/:newsId/:newsTitle'
    },{
      path:'/aliasJup',
      component:AliasJup,
      alias:'/lvtanxi'
    },{
      path:'*', //404
      component: Error
    }
  ]
})
