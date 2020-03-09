<template>
    <div class="score">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Score"
  }
</script>

<style scoped lang="scss">
  .score {
    width: 1rem;
    height: 0.68rem;
    line-height: 0.68rem;
    background: #fa607d;
    border-radius: 1rem;
    color: #fff;
    text-align: center;
    /*position: absolute;*/
    /*top: 0.2rem;*/
    /*right: 0.2rem;*/
  }
</style>