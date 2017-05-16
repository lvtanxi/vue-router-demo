<template>
  <div id="app">
    <p>基本页面跳转</p>
    <router-link to="/Hi">去Hi页面</router-link>
    <p>子界面跳转</p>
    <router-link to="/Hi/hi1">去Hi页面1</router-link>
    <router-link to="/Hi/hi2">去Hi页面2</router-link>
    <p>页面之间的参数传递</p>
    <router-link to="/nameParam">利用Name传递参数</router-link>
    <router-link :to="{name:'paramsParam',params:{name:'利用Params传递参数'}}">利用Params传递参数</router-link>
    <router-view></router-view>
    <p>单页面多路由</p>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:80px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:80px;"></router-view>
    <p>单页面多路由2</p>
     <router-link to="/jspang">利用Name传递参数</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
