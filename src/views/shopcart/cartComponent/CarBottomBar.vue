<template>
  <div class="car-bottom-bar">
    <div class="check-button" :class="{checked : allChecked}" >
      <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
    <span>全选</span>
    <div class="total-price">合计:{{totalPrice}}</div>
    <div class="submit-btn" @click="submitOrder">提交订单</div>
  </div>
</template>

<script>
import { SubmitBar, Checkbox ,Toast} from "vant";
export default {
  name: "CarBottomBar",
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Toast.name]:Toast
  },
  computed:{
    totalPrice(){
      return '￥'+ this.$store.state.carList.filter(item => {
        return item.checked
      }).reduce((preVal,item) => {
        return preVal+item.price*item.count
      },0).toFixed(2)
    },
    allChecked(){
      return this.$store.state.carList.every( item => {
        return item.checked === true
      })
    }
  },
  methods:{
    submitOrder(){
      Toast("支付成功")
    }
  }
};
</script>

<style lang="less" scoped>
.car-bottom-bar {
  display: flex;
  padding-top: 10px;
  line-height: 40px;
  background: #EED5D2;
  border-top: 1px solid	#EEE9E9;
  .check-button {
    float: left;
    margin: 8px 0 0 10px;
    height: 24px;
    width: 24px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #aaa;
    img {
      margin-top: -20px;
      vertical-align: middle;
    }
  }
  span {
    margin: 0 5px;
    font-size: 16px;
  }
  .total-price {
    flex: 1;    
    font-size: 14px;
    margin-left: 42px;
  }
  .submit-btn {
    flex: 1;
    margin: -3px  25px 0 0;
    height: 35px;
    line-height: 35px;
    box-shadow: 2px 2px 5px pink;
    color: whitesmoke;
    background: #FF9999;
    border-radius: 87px;
    text-align: center;
    font-size: 16px;
  }
  .checked {
    background-color: red;
    border-color: red;
  }
}
</style>