<template>
  <div>
    <p>当前的数字是:{{count}}</p>
    <button @click="add">添加</button>
    <button @click="sub">减少</button>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default {
  computed: mapGetters(["count"]),
  methods: mapActions(["add","sub"])
}
</script>
