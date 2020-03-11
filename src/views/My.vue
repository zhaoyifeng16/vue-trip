<template>
  <div class="my">
    <div class="bg">
      <div class="mask"></div>
    </div>
    <!--头像-->
    <div class="avatar">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232034269,3825606000&fm=26&gp=0.jpg" alt="">
    </div>

    <!--昵称-->
    <div class="nickname">
      <h1>包图网</h1>
      <h2>123456@qq.com</h2>
    </div>

    <!--信息数量-->
    <div class="infoCount">
      <ul>
        <li>
          <h3>103</h3>
          <p>照片</p>
        </li>
        <li>
          <h3>17k</h3>
          <p>评论</p>
        </li>
        <li>
          <h3>1.5k</h3>
          <p>关注</p>
        </li>
      </ul>
    </div>

    <!--酒店、记忆-->
    <div class="infoDetail">
      <ul>
        <li>
          <img src="http://img1.imgtn.bdimg.com/it/u=2108341618,2453065867&fm=26&gp=0.jpg" alt="">
          <p>酒店</p>
        </li>
        <li>
          <img src="http://img1.imgtn.bdimg.com/it/u=2108341618,2453065867&fm=26&gp=0.jpg" alt="">
          <p>记忆</p>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import api from "../api"

  export default {
    name: "My",
    methods: {},
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .my{
    @include exBottomTap;
  }

  .bg {
    position: fixed;
    width: 100%;
    padding-top: 2.16rem;
    background-color: #ff0c00;
    z-index: -1;
    background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3281062351,1914723663&fm=26&gp=0.jpg);
    background-size: cover;

    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.48);
      top: 0;
    }
  }

  .avatar {
    padding-top: .85rem;
    text-align: center;

    img {
      width: 2.88rem;
      height: 2.88rem;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
    }
  }

  .nickname {
    text-align: center;
    margin-top: .56rem;

    h1 {
      line-height: .52rem;
      font-size: .4rem;
      font-weight: 900;
    }

    h2 {
      line-height: .45rem;
      font-size: .28rem;
      color: #7c8698;
    }
  }

  .infoCount {
    @include sidePadding;

    ul {
      border: .03rem solid #e1e1e1;
      margin-top: .7rem;
      height: 1.45rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: .18rem;
      background-color: #fff;

      h3 {
        font-size: .4rem;
        color: #203152;
        font-weight: 900;
      }

      p {
        font-size: .28rem;
        color: #7c8698;
        font-weight: 900;
      }
    }
  }

  .infoDetail{
    @include sidePadding;
    margin-top: .6rem;
    ul{
      display: flex;
      li{
        width: 3.2rem;
        img{
          width: 100%;
          height: 2.9rem;
          border-radius: .18rem;
        }
        p{
          margin-top: .38rem;
          font-weight: 900;
        }
        &:first-child{
          margin-right: .30rem;
        }
      }
    }
  }
</style>