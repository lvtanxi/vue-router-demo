<template>
  <div>
    <p>新闻ID：{{ $route.params.newsId}}</p>
    <p>新闻标题：{{ $route.params.newsTitle}}</p>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("this is page beforeRouteEnter")
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("this is page beforeRouteLeave")
    next()
  }
}
</script>
