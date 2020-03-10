<template>
  <div class="category">
    <div class="top">
      <div class="title">
        <h3>类别</h3>
        <!--下拉菜单-->
        <van-dropdown-menu>
          <van-dropdown-item  @change="changeCategory" v-model="currentId" :options="options"/>
        </van-dropdown-menu>
      </div>
      <!--搜索栏-->
      <SearchBar></SearchBar>
    </div>

    <div class="list">
      <ul>
        <li v-for="item in list" @click="toDetail(item.id)">
          <PlaceCard
                  :name="item.name"
                  :img="item.img"
                  :score="item.score"
                  :visited-count="item.visited"
                  :avatars="item.avatars"
                  :hotel-count="item.hotelCount"
          ></PlaceCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from "../api"
  import SearchBar from "../components/SearchBar";
  import PlaceCard from "../components/PlaceCard";

  export default {
    name: "Category",
    data() {
      return {
        options: [],
        currentId: 0,
        list: []
      }
    },
    methods:{
      // 获取数据
      getData(){
        api.getCityByCategory(this.currentId).then(data => {
          this.list = data.data.list
        })
      },

      // 类别切换
      changeCategory(){
        this.getData()
      },

      // 跳转到详情
      toDetail(id){
        this.$router.push(`/detail/${id}`)
      }
    },
    created() {
      this.getData();
      // 获取类别
      api.getCategory().then(data => {
        let list = data.data.data.list
        // 处理数据
        let tempArr = [];
        for (let i = 0; i < list.length; i++) {
          let {categoryId, name} = list[i];
          let obj = {text: name, value: categoryId}
          tempArr.push(obj);
        }
        this.options = tempArr;
        this.currentId = this.options[0].value
      })
    },
    components: {
      SearchBar, PlaceCard
    }

  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .title {
    display: flex;
    justify-content: space-between;
    @include sidePadding;
    margin-top: .46rem;
    height: .9rem;
    align-items: center;

    .van-dropdown-menu {
      width: 2.26rem;
      height: 100%;
      border: 1px solid #4a90e2;
      border-radius: .5rem;
    }
  }

  .search-bar {
    margin-top: .6rem;
    margin-bottom: .6rem;
  }

  .list {
    @include sidePadding;
  }

</style>