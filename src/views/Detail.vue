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
      <div class="trvaled">
        <ul>
          <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583581990744&di=a046b14e7495aca7e8fb3851e0a52915&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F11%2F23%2F991ef2e724040f17e61a6d654d67f2d0.jpg"
                 alt/>
          </li>
          <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583581990744&di=a046b14e7495aca7e8fb3851e0a52915&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F11%2F23%2F991ef2e724040f17e61a6d654d67f2d0.jpg"
                 alt/>
          </li>
          <li>
            <p>+8</p>
          </li>
        </ul>
        <p>参观了这个城市</p>
      </div>
    </div>

    <!--图片-->
    <div class="img">
      <img v-lazy="detailInfo.img" alt="">
      <div class="score">
        <p>{{detailInfo.score}}</p>
      </div>
    </div>

    <!--描述-->
    <div class="desc">
      <p v-for="item in detailInfo.descs">{{item}}</p>
      <div class="btn-hotel-list">酒店列表</div>
    </div>
  </div>

</template>

<script>
  import api from "../api/index"

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
      }
    },
    created() {
      let {id} = this.$route.params
      api.getDetail(id).then(data => {
        console.log(data.data)
        this.detailInfo = data.data
      })
    }
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


    .trvaled {
      display: flex;
      justify-content: center;
      margin-top: .2rem;
      line-height: 0.68rem;

      ul {
        display: flex;

        li {
          width: 0.68rem;
          height: 0.68rem;
          text-align: center;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }

          &:last-child {
            background: #5680fa;
            font-size: 0.24rem;
            color: #fff;
          }

          &:nth-of-type(2) {
            position: relative;
            left: -0.12rem;
          }

          &:nth-of-type(3) {
            position: relative;
            left: -0.24rem;
          }
        }
      }

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
      width: 1rem;
      height: .7rem;
      text-align: center;
      line-height: .7rem;
      background: #fa607d;
      top: .4rem;
      right: .4rem;
      border-radius: .5rem;
      color: #fff;

      p {

      }
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