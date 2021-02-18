<template>
  <div class="all-orders">
    <nav-bar class="nav-bar">
      <div slot="left" @click="goBack" class="back">
        <img src="../../assets/img/common/back.svg" />
      </div>
      <div slot="center">全部订单</div>
    </nav-bar>
    <div class="order-container">
      <van-tabbar
        v-model="active"
        :fixed="fixed"
        active-color="#FF3E96"
        @change="onChange"
      >
        <van-tabbar-item class="item" >
          <template>
            <img v-if="active === 0" src="../../assets/img/profile/orders-active.svg" alt="" />
            <img v-else src="../../assets/img/profile/orders.svg" alt="" />
          </template>
          <div>全部</div>
        </van-tabbar-item>
        <van-tabbar-item class="item" >
          <template>
            <img v-if="active === 1" src="../../assets/img/profile/payoff-active.svg" alt="" />
            <img v-else src="../../assets/img/profile/payoff.svg" />
          </template>
          <div>待付款</div>
        </van-tabbar-item>
        <van-tabbar-item class="item">
          <template>
            <img v-if="active === 2" src="../../assets/img/profile/send-active.svg" alt="" />
            <img v-else src="../../assets/img/profile/send.svg" alt="" />
          </template>
          <div>待发货</div>
        </van-tabbar-item>
        <van-tabbar-item class="item">
          <template>
            <img v-if="active === 3" src="../../assets/img/profile/receive-active.svg" alt="" />
            <img v-else src="../../assets/img/profile/receive.svg" alt="" />
          </template>
          <div>待收货</div>
        </van-tabbar-item>
        <van-tabbar-item class="item">
          <template>
            <img v-if="active === 4" src="../../assets/img/profile/comment-active.svg" alt="" />
            <img v-else src="../../assets/img/profile/comment.svg" alt="" />
          </template>
          <div>待评价</div>
        </van-tabbar-item>
      </van-tabbar>
      <order-item v-if="active === 0" :orders="allOrders" :index="index"/>
      <order-item v-else-if="active === 1" :orders="propVal2" :index="index"/>
      <order-item v-else-if="active === 2" :orders="propVal3" :index="index"/>
      <order-item v-else-if="active === 3" :orderArr="propVal4"/>
      <order-item v-else :orderArr="propVal5"/>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { Tabbar, TabbarItem, Notify } from "vant";
import OrderItem from './childComponent/OrderItem.vue';
export default {
  name: "AllOrders",
  components: {
    NavBar,
    OrderItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: 0,
      fixed: false,
      index:this.$route.params.index,
      allOrders:this.$store.state.allOrders,
      propVal2:[],
      propVal3:[],
      propVal4:"待收货",
      propVal5:"待评价"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.index=index
    },
  },
  mounted(){
    this.active=this.index
    this.propVal2.push(this.$store.state.allOrders[this.active])
    this.propVal3.push(this.$store.state.allOrders[this.active+1])
  }
};
</script>

<style lang="less" scoped>
.all-orders {
  .nav-bar {
    background: #ff5777;
    color: #ffffff;
    .back {
      margin-left: 10px;
    }
  }
  .order-container {
    .item {
      flex: 1;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>