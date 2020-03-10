<template>
  <div class="search">
    <van-search
            v-model="value"
            shape="round"
            background="#4fc08d"
            placeholder="搜索目的地..."
            show-action
    />
    搜索页
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        value:"",
      }
    },
    components:{}
  }
</script>

<style scoped>

</style>