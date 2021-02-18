<template>
  <div class="detail-show">
    <div class="detail-container">
      <van-swipe :autoplay="2000" v-if="show.topImg">
        <van-swipe-item v-for="(item, index) in show.topImg" :key="index" class="swipe-item">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
      <van-swipe v-else>
        <img :src="src" />
      </van-swipe>
      <div class="detail-price">
        <span>￥{{ show.price }}</span>
        <span class="detail-discount" v-if="!!show.discount"
        >{{ show.discount }}折</span>
      </div>
      <div class="detail-title">{{ show.productName }}</div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name:"DetailShow",
  components:{
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props:{
    show:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
    }
  }
}
</script>

<style lang="less">
 .detail-container {
    .swipe-item {
      height: 300px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .detail-price {
      background:url('../../../assets/img/detail/detailbg.jpg');
      box-shadow: 5px 0 5px #cccccc;
      color:#FFFFFF;
      text-align: left;
      line-height: 50px;
      font-size: 28px;
    }
    .detail-discount {
      margin-left: 5px;
      font-size: 14px;
      color: #cccccc;
    }
    .detail-title {
      margin-top: 15px;
      text-align: left;
      text-indent: 10px;
      font-size: 14px;
      font-weight: 600;
    }
  }
</style>