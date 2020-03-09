<template>
  <div class="visited">
    <ul>
      <li v-for="(avatar,index) in avatars" :key="index">
        <img :src="avatar" alt/>
      </li>
      <li>
        <p>+{{visitedCount}}</p>
      </li>
    </ul>
    <p>参观了这个城市</p>
  </div>
</template>

<script>
  export default {
    name: "Visited",
    props: {
      // 头像
      avatars: Array,
      // 参观数量
      visitedCount: Number,
    }
  }
</script>

<style scoped lang="scss">

  .visited {
    /*margin-top: 0.27rem;*/
    /*margin-bottom: 0.15rem;*/
    display: flex;

    > p {
      line-height: 0.68rem;
      font-size: 0.24rem;
      color: #7c8698;
      margin-left: .15rem;
    }

    ul {
      display: flex;

      li {
        width: 0.68rem;
        height: 0.68rem;
        line-height: 0.68rem;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          background-color: #fff;
        }

        &:last-child {
          background: #5680fa;
          font-size: 0.24rem;
          color: #fff;
        }

        &:nth-of-type(2) {
          /*position: relative;*/
          margin-left: -0.12rem;
          /*left: -0.12rem;*/
        }

        &:nth-of-type(3) {
          position: relative;
          margin-left: -0.12*2rem;
        }
      }
    }
  }
</style>