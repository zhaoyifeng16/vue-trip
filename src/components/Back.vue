<template>
  <!--返回按钮-->
  <div class="back">
    <i class="iconfont icon-fanhui" @click="back"></i>
  </div>
</template>

<script>
  export default {
    name: "Back",

    methods: {
      back() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped lang="scss">
  .back {
    padding-left: .37rem;

    i {
      font-size: .33rem;
      line-height: .67rem;
    }
  }
</style>