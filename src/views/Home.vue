<template>
  <div class="home">
    <h1>说走就想走的旅行</h1>

    <!-- 搜索框 -->
    <Search></Search>

    <!-- 分类滑动块 -->
    <div class="scroll-container">
      <ul>
        <li
                v-for="(item, index) in homeTab"
                :key="index"
                :style="`background-image:url(${item.img})`"
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

      <van-loading color="#4a90e2" v-if="!popularList.length"/>
      <ul>
        <li v-for="(item,index) in popularList"
            :key="index"
            @click="toDetail(item.id)"
        >
          <PlaceCard :img="item.img"
                     :name="item.name"
                     :score="item.score"
                     :avatars="item.avatars"
                     :hotel-count="item.hotelCount"
                     :visited-count="item.visitedCount"
          ></PlaceCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from "../api";
  import Search from "../components/Search";
  import PlaceCard from "../components/PlaceCard";

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
      // 获取受欢迎的
      api.getPopular().then(data => {
        this.popularList = data.data.data.list;
        console.log(this.popularList)
      });
      // 获取首页分类
      api.getCategory().then(data => {
        this.homeTab = data.data.data.list;
        console.log(data)
      });
    },
    components: {Search,PlaceCard}
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

  .popular {
    @include sidePadding;

    .van-loading {
      text-align: center;
    }

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

    ul {
      padding-bottom: 1rem;
    }
  }
</style>