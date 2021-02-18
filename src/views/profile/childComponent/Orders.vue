<template>
  <div class="orders">
    <div class="up-part">
      <span class="mine-order">我的订单</span>
      <span class="more" @click="goAllOrders">查看全部</span>
    </div>
    <div class="down-part" >
      <van-tabbar v-model="active" :fixed="fixed" active-color="#7d7e80" route @change="onChange" >
        <van-tabbar-item class="item"  @click="goAllOrdersDetail">
          <template>
            <img src="../../../assets/img/profile/payoff.svg" />
          </template>
          <div>待付款</div>
        </van-tabbar-item>
        <van-tabbar-item class="item"  @click="goAllOrdersDetail">
          <template>
            <img src="../../../assets/img/profile/send.svg" alt="" />
          </template>
          <div>待发货</div>
        </van-tabbar-item>
        <van-tabbar-item class="item"  @click="goAllOrdersDetail">
          <template>
            <img src="../../../assets/img/profile/receive.svg" alt="" />
          </template>
          <div>待收货</div>
        </van-tabbar-item>
        <van-tabbar-item class="item"  @click="goAllOrdersDetail">
          <template>
            <img src="../../../assets/img/profile/comment.svg" alt="" />
          </template>
          <div>待评价</div>
        </van-tabbar-item>
        <van-tabbar-item class="item">
          <template>
            <img src="../../../assets/img/profile/aftersale.svg" alt="" />
          </template>
          <div>退款/售后</div>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem ,Notify } from "vant";
import axios from 'axios';

export default {
  name: "Orders",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: 0,
      fixed: false,
      index:1,
      orders:[],
    };
  },
  methods: {
    onChange(index) {
      this.index=index+1
    },
    goAllOrders(){
      this.$router.push({name:"AllOrders",params:{index:0}})
    },
    goAllOrdersDetail(){
       this.$router.push({name:"AllOrders",params:{index:this.index}})
      //this.$router.push({path:"/allorders",params:{index:this.index}})
    },
    getOrdersItem(){
      axios.get('/data/orders.json')
      .then( data => {
        this.orders=data.data
        this.$store.state.allOrders=data.data
        //console.log(this.$store.state.allOrders)
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
  mounted(){
    this.getOrdersItem()
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.orders {
  margin-top: 67px;
  background: #ffffff;
  border-radius: 15px 15px 0 0;
  font-size: 14px;
  .up-part {
    line-height: 38px;
    border-bottom: 1px solid #999999;
    .mine-order {
      margin-left: 25px;
    }
    .more {
      float: right;
      margin-right: 25px;
    }
    .more::after {
      content: "";
      margin: -2px 0 0 4px;
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      background: url(../../../assets/img/profile/arrow.svg);
      background-size: cover;
    }
  }
  .down-part {
    display: flex;
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    .item {
      flex: 1;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>