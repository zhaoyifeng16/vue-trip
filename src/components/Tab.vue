<template>
  <div class="tab">
    <router-link to="home" active-class="active">
      <i class="iconfont icon-homepage"></i>
    </router-link>

    <router-link to="star" active-class="active">
      <i class="iconfont icon-like"></i>
    </router-link>

    <div class="add">
      <div class="bg">
        <i class="iconfont icon-jia"></i>
      </div>
    </div>

    <router-link to="category" active-class="active">
      <i class="iconfont icon-manage"></i>
    </router-link>

    <router-link to="my" active-class="active">
      <i class="iconfont icon-people"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  align-items: center;
  text-align: center;
  height: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  color: #b8c9f6;
  background-color: rgba(255, 255, 255, 0.9);
  a {
    font-size: 0;
    width: 50%;
    .iconfont {
      font-size: 0.5rem;
    }
  }
  .active {
    color: #4a77f3;
  }
  // 中间+符号
  .add {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    color: #fff;
    .bg {
      position: absolute;
      background: #4a77f3;
      width: .9rem;
      height: .9rem;
      border-radius: 50%;
      top: -.2rem;
      i {
        font-size: 0.32rem;
        line-height: .9rem;
        text-align: center;
      }
    }
  }
}
</style>