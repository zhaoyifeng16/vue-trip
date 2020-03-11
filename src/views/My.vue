<template>
  <div class="my">
    用户
    <router-view></router-view>
  </div>
</template>

<script>
  import api from "../api"

  export default {
    name: "My",
    methods:{
      login(){
        let userInfo = {
          username: "admin",
          pwd: "123"
        }
        api.login(userInfo).then(data=>{
          console.log(data)
        })
      }
    },
  }
</script>

<style scoped lang="scss">

</style>