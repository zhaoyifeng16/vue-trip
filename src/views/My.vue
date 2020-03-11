<template>
  <div class="my">
    <Back></Back>

  </div>
</template>

<script>
  import api from "../api"
  import Back from "../components/Back";

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
    components:{
      Back
    }
  }
</script>

<style scoped lang="scss">

</style>