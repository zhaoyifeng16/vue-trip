<template>
  <div class="hotel-list">
    <div class="top">
      <!--返回按钮-->
      <Back></Back>
      <h1>{{hotelInfo.name}}</h1>
      <h2>{{hotelList.length}}家酒店可用</h2>
      <SearchBar></SearchBar>
    </div>
    <div class="list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
        >
          <HotelCard
                  v-for="(item, index) in hotelList" :key="index"
                  :hotel-name="item.hotelName"
                  :img="item.img"
                  :score="item.score"
                  :avatars="item.avatars"
                  :visited="item.visited"
          ></HotelCard>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import api from "../api"
  import SearchBar from "../components/SearchBar";
  import HotelCard from "../components/HotelCard";
  import Back from "../components/Back";

  export default {
    name: "HotelList",
    data() {
      return {
        hotelInfo: {},
        hotelList: [],
        loading: false,
        finished: false,
        refreshing: false
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getHotelInfo() {
        let {id} = this.$route.params
        api.getHotels(id).then(data => {
          this.hotelInfo = data.data
          this.hotelList = this.hotelInfo.list
          console.log(this.hotelInfo)
          this.loading = false;
          this.refreshing = false;
          this.finished = true;
        })
      },
      onLoad() {
        this.getHotelInfo();
      },
      onRefresh() {
        this.loading = true;
        this.onLoad();
      },
    },
    components: {
      SearchBar, HotelCard,Back
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