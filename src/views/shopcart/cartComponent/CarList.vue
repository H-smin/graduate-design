<template>
  <div class="car-list">
    <div v-for="(item, index) in carList" :key="index" class="goods">
      <div
        class="check-button"
        :class="{ check: item.checked }"
        @click="checkClick(index)"
      >
        <img src="~assets/img/cart/tick.svg" alt="" />
      </div>
      <div class="goods-card">
        <img :src="item.image" alt="" class="card-img" />
        <div class="card-name">{{ item.productName }}</div>
        <div class="del-btn" @click="delGoods(index)">删除</div>
        <div class="count">
          <span class="price">￥{{ item.price }}</span>
          x{{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from "vant";
export default {
  name: "CarList",
  components: {
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      // isChecked:this.$store.state.carList
    };
  },
  computed: {
    carList(state) {
      return this.$store.state.carList;
    },
  },
  methods: {
    checkClick(index) {
      this.$store.commit("checkClick", index);
    },
    delGoods(index){
      this.$store.commit("delGoods", index);
    }
  },
};
</script>

<style lang="less" scoped>
.car-list {
  .goods {
    margin: 10px 0;
    overflow: hidden;
    color: #666666;
    border-bottom: 1px solid #cccccc;
    .check-button {
      float: left;
      margin-left: 10px;
      height: 24px;
      width: 24px;
      text-align: center;
      border-radius: 50%;
      border: 2px solid #aaa;
      margin-top: 31px;
      img {
        margin-top: -8px;
        vertical-align: middle;
      }
    }
    .goods-card {
      .card-img {
        width: 24%;
        border-radius: 15px;
        float: left;
        margin-left: 10px;
      }
      .card-name {
        padding-top: 20px;
        font-size: 16px;
        overflow: hidden;
        width: 190px;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-indent: 10px;
      }
      .del-btn {
        margin: -32px 5px 0 0;
        width: 51px;
        height: 30px;
        margin-right: 5px;
        border-radius: 8px;
        background: #FF9999;
        color: #ffffff;
        float: right;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
      }
      .count {
        float: right;
        margin: 20px 40px 0 0;
        color: #999999;
        font-size: 16px;
        .price {
          margin-right: 5px;
          color: #ff4500;
          font-size: 22px;
        }
      }
    }
  }
  .check {
    background-color: red;
    border-color: red;
  }
}
</style>