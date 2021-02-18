<template>
  <div class="detail-service">
    <van-cell is-link @click="showPopup">
      <div class="cupon-container">
        <div class="cupon-left icon-commom">七天无理由退货</div>
        <div class="cupon-center icon-commom">试用服务</div>
        <div class="cupon-right icon-commom">退货免运费</div>
      </div>
    </van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="cupon-title">服务说明</div>
      <div class="return" v-for="(item,index) in service" :key="index" >
        <div class="service-title">{{item.title}}</div>
        <div class="service-explain">{{item.explain}}</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Cell } from "vant";
export default {
  name: "DetailService",
  components: {
    [Popup.name]: Popup,
    [Cell.name]: Cell,
  },
  data(){
    return {
      show:false,
      service:[
        {
          title:'七天无理由退货',
          explain:'物流签收后7天内买家可无理由退货，需满足退货条件'
        },
        {
          title:'15天试用期',
          explain:'可选择试用，物流签收后买家有十五天的试用物品时间，若对商品不满意可选择退货同时支付试用费'
        },
        {
          title:'退货免运费',
          explain:'用户发起退货且绑定提现银行卡，可获6-18元运费补贴'
        },
      ]
    }
  },
  methods:{
    showPopup(){
      this.show=true
    }
  }
};
</script>

<style lang="less" scoped>
.cupon-container {
    display: flex;
    font-size: 12px;
    color: #666666;
    .cupon-left {
      flex: 1;
    }
    .cupon-center {
      margin: 0 10px;
    }
    .cupon-right {
     flex: 1;
    }
  }
  .icon-commom::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin: -3px 2px 0 0;
    width: 15px;
    height: 15px;
    background: url('../../../assets/img/detail/detail-icon.webp');
    background-size: cover;
  }
  .cupon-title {
    margin-top: 10px;
  }
  .return {
    margin: 15px 0;
    text-align: left;
    text-indent: 4px;
    .service-title {
      margin: 10px 0;
      font-size: 18px;
    }
    .service-explain {
      font-size: 14px;
      color: #999999;
    }
  }
  
</style>