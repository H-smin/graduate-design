<template>
  <div class="swipe">
    <div class="swiper-box">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(item, index) in swipImg" :key="index">
          <img :src="item" alt=""/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "Swipe",
   props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }  
  },
  data(){
    return {
      swipImg:[require('assets/img/home/swipe/1.jpg'),
               require('assets/img/home/swipe/2.jpg'),
               require('assets/img/home/swipe/3.jpg'),
               require('assets/img/home/swipe/4.jpg'),
               require('assets/img/home/swipe/5.jpg')
      ]
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
 
};
</script>

<style lang="less">
.swipe {
  img {
    width: 100%;
  }
}
</style>