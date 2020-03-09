<template>
  <div class="detail">
    <!--返回按钮-->
    <div class="back">
      <i class="iconfont icon-fanhui" @click="back"></i>
    </div>

    <!--标题-->
    <div class="titel">
      <h1>{{detailInfo.name}}</h1>
      <div class="hotels">
        <p>{{detailInfo.hotelCount}}家酒店可用</p>
      </div>
      <Visited :visited-count="detailInfo.visited" :avatars="detailInfo.avatars"></Visited>
    </div>

    <!--图片-->
    <div class="img">
      <img v-lazy="detailInfo.img" alt="">
      <Score>{{detailInfo.score}}</Score>
    </div>

    <!--描述-->
    <div class="desc">
      <p v-for="item in detailInfo.descs">{{item}}</p>
      <div class="btn-hotel-list" @click="toHotelList">酒店列表</div>
    </div>
  </div>

</template>

<script>
  import api from "../api/index"
  import Visited from "../components/Visited";
  import Score from "../components/Score";

  export default {
    name: "Detail",
    data() {
      return {
        detailInfo: {},
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      toHotelList() {
        // console.log(this.detailInfo)
        let {id} = this.$route.params
        this.$router.push(`/hotellist/${id}`)
      }
    },
    created() {
      let {id} = this.$route.params
      api.getDetail(id).then(data => {
        console.log(data.data)
        this.detailInfo = data.data
      })
    },
    components: {Visited, Score}
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .detail {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fafafa;
    z-index: 1;
  }

  .back {
    padding-left: .37rem;

    i {
      font-size: .33rem;
      line-height: .67rem;
    }
  }

  .titel {
    text-align: center;

    h1 {
      font-size: .48rem;
      line-height: .58rem;
      font-weight: bold;
    }

    .hotels {
      display: flex;
      justify-content: center;

      p {
        font-size: .24rem;
        line-height: .70rem;
        padding: 0 .9rem;
        border-bottom: 2px solid #ebebeb;
      }
    }

    .visited {
      /*display: flex;*/
      justify-content: center;
      margin-top: .2rem;
    }
  }

  .img {
    text-align: center;
    margin-top: .58rem;
    /*background-color: #404048;*/
    position: relative;

    img {
      width: 5.90rem;
      height: 5.47rem;
      border-radius: .2rem;
      object-fit: cover;
    }

    .score {
      position: absolute;
      top: .4rem;
      right: .4rem;
    }
  }

  .desc {
    background: #fff;
    height: 3.12rem;
    margin: 0 .4rem;
    padding-top: .44rem;
    position: relative;
    border-radius: 0.25rem;

    > p {
      text-align: center;
      padding: 0 .7rem;
      font-size: .24rem;
      line-height: .34rem;
      font-weight: bold;
    }

    .btn-hotel-list {
      height: 1.1rem;
      width: 5.9rem;
      background: #5680fa;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -0.42rem;
      border-radius: 1rem;
      text-align: center;
      line-height: 1.1rem;
      font-weight: bold;
      color: #fff;
    }
  }
</style>