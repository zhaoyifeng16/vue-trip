<template>
  <div class="search">
    <div class="real-search-bar">
      <div class="bg">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索目的地..." v-model="inpVal" @keydown.enter="search">
        <i class="iconfont icon-close1" @click="back"></i>
      </div>
    </div>

    <div class="hot-search">
      <h3>热门关键字</h3>
      <ul>
        <li v-for="item in hotKeywords">
          <i class="iconfont icon-search"></i><span @click="clickHot">“{{item}}”</span>
        </li>
      </ul>
    </div>

    <div class="popular-hotel">
      <h3>受欢迎的酒店</h3>
      <ul>
        <li>
          <HotelCard></HotelCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from '../api'
  import HotelCard from "../components/HotelCard";

  export default {
    name: "Search",
    data() {
      return {
        // 输入框值
        inpVal: "",
        // 热门关键字
        hotKeywords: []
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      search() {
        console.log("取人搜索")
        this.$toast.loading({
          duration: 0,
          message: '拼命搜索中...',
          forbidClick: true,
        })
        api.search(this.inpVal).then(data => {
          let {code, id} = data.data
          console.log(code)
          if (code == 0) { // 搜索匹配到
           this.$toast.clear();
           this.$router.push(`/hotellist/${id}`)
          }else {
            console.log("没有找到")
            this.$toast.clear();
            this.$toast("没有找到")

          }
        })
      },
      // 点击热搜时
      clickHot(e) {
        let temp = e.target.innerText
        temp = temp.substring(1, temp.length - 1)
        this.inpVal = temp;
        this.search();
      }
    },
    created() {
      api.getHotSearch().then(data => {
        this.hotKeywords = data.data.list
      })
    },
    components: {HotelCard}
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .search {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fafafa;
    @include sidePadding;
  }

  .real-search-bar {
    padding-top: .46rem;
    padding-bottom: .46rem;

    .bg {
      height: 1.1rem;
      border: 1px solid #e1e1e1;
      border-radius: 1rem;
      padding: 0 0.28rem;
      font-size: 0.34rem;
      box-shadow: 0 7px 41px 1px rgba(221, 221, 221, 0.5);
      line-height: 1.1rem;
      color: #7c8698;
      display: flex;
      justify-content: space-between;
      font-weight: 900;

      i {
        font-size: 0.44rem;
        color: #4a90e2;
        padding: 0 .1rem;
      }

      input {
        height: 100%;
        border: none;
        background-color: transparent;
        flex: 1;
      }
    }
  }

  .hot-search {
    font-weight: 900;

    h3 {
      line-height: .78rem;
      font-size: .36rem;
    }

    ul {
      li {
        height: .77rem;
        display: flex;
        align-items: center;

        i {
          font-weight: 900;
          font-size: .4rem;
          color: #5680fa;
        }

        span {
          font-size: .36rem;
          color: #7c8698;
        }
      }
    }
  }

  .popular-hotel {
    margin-top: .46rem;

    h3 {
      line-height: .68rem;
      font-size: .36rem;
      font-weight: 900;
    }
  }
</style>