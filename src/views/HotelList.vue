<template>
  <div class="hotel-list">
    <div class="top">
      <!--返回按钮-->
      <div class="back">
        <i class="iconfont icon-fanhui" @click="back"></i>
      </div>
      <h1>拉斯维加斯</h1>
      <h2>21312家酒店可用</h2>
      <Search></Search>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in 9">
          <div class="left">
            <img src="" alt="">
          </div>
          <div class="center">
            <h3>蓝色厉声酒店</h3>
            <Visited visited-count="8" :avatars="avatars"></Visited>
          </div>
          <div class="right">
            <Score>{{9.1}}</Score>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Search from "../components/Search";
  import Visited from "../components/Visited";
  import Score from "../components/Score";

  export default {
    name: "HotelList",
    data() {
      return {
        avatars: ["http://bpic.588ku.com/original_pic/19/04/12/0f2a7c0bdd72589d84ebe863b65c2e4e.jpg", "http://bpic.588ku.com/original_pic/19/04/12/0f2a7c0bdd72589d84ebe863b65c2e4e.jpg"]
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
    components: {
      Search, Visited, Score
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .hotel-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fafafa;
    z-index: 1;
  }

  .top {
    position: fixed;
    background: #fafafa;
    width: 100%;
    z-index: 1;
    padding-bottom: .14rem;
  }


  .back {
    padding-left: .37rem;

    i {
      font-size: .33rem;
      line-height: .67rem;
    }
  }

  h1 {
    text-align: center;
    font-size: .52rem;
    line-height: .64rem;
  }

  h2 {
    text-align: center;
    font-size: .24rem;
    line-height: .68rem;
    margin-bottom: .26rem;
  }

  .list {
    position: absolute;
    top: 3.35rem;
    bottom: 0;
    overflow-y: scroll;

    ul {

      li {
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
    }
  }

</style>