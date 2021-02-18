<template>
  <div class="order-item">
    <div class="list-item" v-for="(item, ind) in orders" :key="ind">
      <div v-if="index === 0" class="title">交易完成</div>
      <div class="content">
        <img :src="item.item.src" alt="" />
        <div class="product-name">{{ item.item.productName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    index:{
      type:Number,
      default:0
    },
    orders: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    //console.log(this.orders);
  },
};
</script>

<style lang="less" scoped>
.order-item {
  margin-top: 14px;
  .list-item {
    margin-top: 10px;
    .title {
      margin-bottom: 5px;
      padding-right: 5px;
      border-bottom: 1px solid;
      box-shadow: 0 5px 5px;
      text-align: end;
      font-size: 14px;
      color:#FFC1C1;
    }
    .content {
      margin-top: 12px;
      overflow: hidden;
      img {
        float: left;
        width: 25%;
        border-radius: 5px;
      }
      .product-name {
        margin-left: 110px;
        text-indent: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>