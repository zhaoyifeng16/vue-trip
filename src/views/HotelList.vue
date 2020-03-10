<template>
  <div class="hotel-list">
    <div class="top">
      <!--返回按钮-->
      <div class="back">
        <i class="iconfont icon-fanhui" @click="back"></i>
      </div>
      <h1>{{hotelInfo.name}}</h1>
      <h2>{{hotelList.length}}家酒店可用</h2>
      <SearchBar></SearchBar>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in hotelList">
          <HotelCard
                  :hotel-name="item.hotelName"
                  :img="item.img"
                  :score="item.score"
                  :avatars="item.avatars"
                  :visited="item.visited"
          ></HotelCard>
          <!--<div class="left">-->
          <!--  <img :src="item.img" alt="">-->
          <!--</div>-->
          <!--<div class="center">-->
          <!--  <h3>{{item.hotelName}}</h3>-->
          <!--  <Visited :visited-count="item.visited" :avatars="item.avatars"></Visited>-->
          <!--</div>-->
          <!--<div class="right">-->
          <!--  <Score>{{item.score}}</Score>-->
          <!--</div>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from "../api"
  import SearchBar from "../components/SearchBar";
  import HotelCard from "../components/HotelCard";

  export default {
    name: "HotelList",
    data() {
      return {
        // avatars: ["http://bpic.588ku.com/original_pic/19/04/12/0f2a7c0bdd72589d84ebe863b65c2e4e.jpg", "http://bpic.588ku.com/original_pic/19/04/12/0f2a7c0bdd72589d84ebe863b65c2e4e.jpg"]
        hotelInfo: {},
        hotelList:[]
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
    created() {
      let {id} = this.$route.params
      api.getHotels(id).then(data => {
        this.hotelInfo = data.data
        this.hotelList = this.hotelInfo.list
        console.log(this.hotelInfo)
      })
    },
    components: {
      SearchBar,HotelCard
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
    width: 100%;
  }

</style>