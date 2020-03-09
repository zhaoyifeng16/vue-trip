<template>
  <div class="home">
    <h1>说走就想走的旅行</h1>

    <!-- 搜索框 -->
    <div class="search">
      <div class="bg">
        <p>
          <i class="iconfont icon-search"></i>
          <span>搜索目的地...</span>
        </p>
      </div>
    </div>

    <!-- 滑动块 -->
    <div class="scroll-container">
      <ul>
        <li
                v-for="(item, index) in homeTab"
                :key="index"
                :style="`background-image: url(${item.img})`"
        >{{item.name}}
        </li>
      </ul>
    </div>

    <!-- 受欢迎的景点 -->
    <div class="popular">
      <div class="ti">
        <h3>受欢迎的旅游景点</h3>
        <p>
          查看所有
          <i class="iconfont icon-enter"></i>
        </p>
      </div>
      <ul>
        <li v-for="(item,index) in popularList"
            :key="index"
            @click="toDetail(item.id)"
            :style="`background-image:url(${item.img})`"
        >
          <!--<img :src="item.img" alt />-->
          <div class="score">{{item.score}}</div>
          <div class="desc">
            <h3>{{item.name}}</h3>
            <h4>{{item.hotelCount}}家酒店</h4>
            <div class="trvaled">
              <div class="who">
                <ul>
                  <li v-for="(avatar,index) in item.avatars" :key="index">
                    <img :src="avatar" alt/>
                  </li>
                  <li>
                    <p>+{{item.travalCount}}</p>
                  </li>
                </ul>
              </div>
              <p>参观了这个城市</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from "../api";

  export default {
    data() {
      return {
        popularList: [],
        homeTab: []
      };
    },
    methods: {
      // 跳转到详情
      toDetail(id) {
        this.$router.push(`/detail/${id}`)
      }
    },
    created() {
      api.getPopular().then(data => {
        this.popularList = data.data.data.list;
        console.log(data)
      });
      api.getHomeScoll().then(data => {
        this.homeTab = data.data.data.list;
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import "../style/mixins.scss";

  h1 {
    line-height: 1.54rem;
    font-size: 0.6rem;
    @include sidePadding;
  }

  .scroll-container {
    @include sidePadding;
    margin-top: 0.6rem;

    ul {
      display: flex;
      overflow-x: scroll;

      li {
        width: 2.4rem;
        height: 1.6rem;
        // background-image: url(http://file02.16sucai.com/d/file/2014/0829/b871e1addf5f8e96f3b390ece2b2da0d.jpg);
        background-size: cover;
        text-align: center;
        line-height: 1.6rem;
        color: #fff;
        font-size: 0.32rem;
        border-radius: 0.15rem;
        margin-right: 0.2rem;
        flex-shrink: 0;
      }
    }
  }

  .search {
    @include sidePadding;

    .bg {
      height: 1.1rem;
      border: 1px solid #e1e1e1;
      border-radius: 1rem;
      padding-left: 0.38rem;
      font-size: 0.34rem;

      i {
        font-size: 0.34rem;
        color: #4a90e2;
      }

      p {
        line-height: 1.08rem;
        color: #7c8698;
      }
    }
  }

  .popular {
    @include sidePadding;

    .ti {
      display: flex;
      justify-content: space-between;
      line-height: 1.3rem;
      margin-top: 0.24rem;

      h3 {
        font-size: 0.4rem;
      }

      p {
        font-size: 0.28rem;
        color: #4a90e2;
        font-weight: 900;

        i {
          font-size: 0.28rem;
        }
      }
    }

    > ul {
      padding-bottom: 1rem;

      > li {
        position: relative;
        height: 4rem;
        margin-bottom: 0.4rem;
        border-radius: 0.14rem;
        background-size: cover;

        .score {
          position: absolute;
          width: 1rem;
          height: 0.68rem;
          line-height: 0.68rem;
          background: #fa607d;
          border-radius: 1rem;
          color: #fff;
          text-align: center;
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

          .trvaled {
            margin-top: 0.27rem;
            margin-bottom: 0.15rem;
            display: flex;

            > p {
              line-height: 0.68rem;
              font-size: 0.24rem;
              color: #7c8698;
            }

            .who {
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
        }
      }
    }
  }
</style>