<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <div @click="changeLike">
      <van-goods-action-icon v-if="like" icon="like-o" text="收藏" />
      <van-goods-action-icon v-else icon="like-o" text="收藏" color="#ff0000"/>
      </div>
      <van-goods-action-button  text="加入购物车" color="#FF9999" @click="addToCar"/>
      <van-goods-action-button type="danger" text="立即购买" color="#FF99CC" />
    </van-goods-action>
  </div>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton,Toast } from "vant";
export default {
  name: "DetailBottomBar",
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Toast.name]:Toast
  },
  data(){
    return {
      like:true,
    }
  },
  methods:{
    changeLike(){
      this.like=!this.like
    },
    addToCar(){
      this.$emit('addCar')
    }
  }
};
</script>

<style lang="less" scoped>
  .bottom-bar{
    .star {
      color:#ff0000 ;
    }
  }

</style>