<template>
  <div class="search-bar" @click="toSearch">
    <div class="bg">
      <p>
        <i class="iconfont icon-search"></i>
        <span>搜索目的地...</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    methods:{
      toSearch(){
        this.$router.push("/search")
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";
  .search-bar {
    @include sidePadding;
    font-weight: 900;

    .bg {
      height: 1.1rem;
      border: 1px solid #e1e1e1;
      border-radius: 1rem;
      padding-left: 0.38rem;
      font-size: 0.34rem;
      box-shadow: 0 7px 41px 1px rgba(221, 221, 221, 0.5);

      i {
        font-size: 0.34rem;
        color: #4a90e2;
        padding-right: .1rem;
      }

      p {
        line-height: 1.08rem;
        color: #7c8698;
      }
    }
  }
</style>