<template>
  <div class="good-list-item">
    <van-list finished="finished" finished-text="没有更多了">
      <van-cell class="list-item" v-for="(item, index) in listItem" :key="index" @click="goDetail(item)">
          <img :src="item.src" />
          <span class="price">￥{{ item.price }}</span>
          <span v-if="!!item.discount" class="discount">{{ item.discount }}折</span>
          <div class="title">{{ item.productName }}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant";
export default {
  name: "GoodListItem",
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
  },
  props:{
    listItem:{
      type:Array,
      default:() => []
    },
  },
  methods:{
    goDetail(item){
      let productInfo=JSON.stringify(item)
      this.$router.push({name:'Detail',query:{productInfo}})
    }
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.good-list-item {
  overflow: hidden;
  text-align: left;
  color: #000000;
  .list-item {
    float: left;
    margin: 10px 9px;
    width: 45%;
    img {
      width: 100%;
      border-radius: 5px;
      box-shadow: 5px 0 5px #cccccc;
    }
    .discount {
      font-size: 12px;
      color: rgba(173, 173, 173, 0.76);
    }
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-align: left;
      width: 100%;
      font-size: 13px;
      color: #585c64;
    }
    .price {
      font-weight: 500;
      font-size: 18px;
      margin-right: 8px;
    }
  }
}
</style>