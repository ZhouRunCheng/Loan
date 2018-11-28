var routes = [
  {
    path:'/notice',
    component:{
      template:'#notice',
    }
  }
]

var router = new VueRouter({
  routes : routes,
})

new Vue({
  el:'#noticeTask',
  router:router,
})
