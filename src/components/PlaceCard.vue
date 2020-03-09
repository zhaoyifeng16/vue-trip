<template>
  <!--景点卡片-->
  <div class="place-card" v-lazy:background-image="img">
    <Score>{{score}}</Score>
    <div class="desc">
      <h3>{{name}}</h3>
      <h4>{{hotelCount}}家酒店</h4>
      <Visited :avatars="avatars" :visited-count="visitedCount"></Visited>
    </div>
  </div>
</template>

<script>
  import Visited from "../components/Visited";
  import Score from "../components/Score";

  export default {
    name: "PlaceCard",
    props: {
      img: String,
      score: Number,
      name: String,
      hotelCount: Number,
      avatars: Array,
      visitedCount: Number,
    },
    components: {
      Visited, Score
    }
  }
</script>

<style scoped lang="scss">

  .place-card {
    position: relative;
    height: 4rem;
    margin-bottom: 0.4rem;
    border-radius: 0.14rem;
    background-size: cover;

    .score {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
    }

    .desc {
      position: absolute;
      width: 4.8rem;
      top: 1.6rem;
      left: -0.2rem;
      padding-left: 0.33rem;
      background: rgba(255, 255, 255, 0.9);

      h3 {
        line-height: 0.62rem;
        font-size: 0.36rem;
      }

      h4 {
        line-height: 0.28rem;
        font-size: 0.24rem;
        color: #7c8698;
      }

      .visited {
        margin-top: 0.27rem;
        margin-bottom: 0.15rem;
      }
    }
  }
</style>