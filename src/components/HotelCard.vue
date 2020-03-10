<template>
  <div class="hotel-card">
    <div class="left">
      <img :src="img" alt="">
    </div>
    <div class="center">
      <h3>{{hotelName}}</h3>
      <Visited :visited-count="visited" :avatars="avatars"></Visited>
    </div>
    <div class="right">
      <Score>{{score}}</Score>
    </div>
  </div>
</template>

<script>
  import Visited from "../components/Visited";
  import Score from "../components/Score";

  export default {
    name: "hotelCard",
    props: {
      hotelName: String,
      img: String,
      visited: Number,
      avatars: Array,
      score: Number
    },
    components: {
      Visited, Score
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .hotel-card {
    display: flex;
    height: 2.20rem;
    border-bottom: 2px solid #e0e0e0;
    @include sidePadding;
    padding-top: .4rem;
    padding-bottom: .4rem;

    .left {
      width: 1.46rem;
      height: 1.40rem;
      background-color: #ff000b;
      border-radius: .15rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .center {
      flex: 1;
      margin-left: .4rem;

      h3 {
        line-height: .4rem;
        font-size: .28rem;
      }

      .visited {
        margin-top: .23rem;
      }
    }

    .right {
      align-self: start;
    }
  }
</style>