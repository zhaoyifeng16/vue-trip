<template>
  <div id="app">
    <keep-alive include="Category">

      <router-view/>
    </keep-alive>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from "./components/Tab"

  export default {

    components: {
      Tab
    }
  }
</script>
<style lang="scss">
  @import "./style/mixins.scss";
</style>
