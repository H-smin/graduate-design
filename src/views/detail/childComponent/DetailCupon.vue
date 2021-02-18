<template>
  <div class="detail-cupon">
    <van-cell is-link @click="showPopup">
      <div class="cupon-container">
        <div class="cupon-left">优惠</div>
        <div class="cupon-center">优惠券{{ cuponCount }}张</div>
        <div class="cupon-right">领取</div>
      </div>
    </van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <div class="cupon-title">店铺优惠券</div>
      <div class="cupons">
        <div
          class="cupon-detail"
          v-for="(item, index) in cuponDetail"
          :key="index"
        >
          <div class="value">
            ￥{{ item.value }}
            <span class="condition">{{ item.condition }}</span>
          </div>
          <div class="valid-time">{{ item.validTime }}</div>
          <div class="receive" @click="toastSuccess">立即领取
          </div>
        </div>
        
      </div>
      <div class="complete-btn" @click="closePopup">
        完成
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Cell ,Toast} from "vant";
export default {
  name: "DetailCupon",
  components: {
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Toast.name]:Toast
  },
  props: {},
  data() {
    return {
      show: false,
      cuponCount: 2,
      cuponDetail: [
        {
          value: "10",
          condition: "满99元使用",
          validTime: "2021.01~2021.12",
        },
        {
          value: "20",
          condition: "满199元使用",
          validTime: "2021.01~2021.12",
        },
      ],
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    toastSuccess(){
      this.$toast.success('领取成功')
    },
    closePopup(){
      this.show = ! this.show
    }
  },
};
</script>

<style lang="less" scoped>
.detail-cupon {
  margin-top: 30px;
  border-top: 1px solid rgba(211, 211, 211, 0.7);
  border-bottom: 1px solid rgba(211, 211, 211, 0.7);
  .cupon-container {
    display: flex;
    font-size: 14px;
    color: #cccccc;
    .cupon-center {
      margin-left: 20px;
      color: #ff5777;
      font-size: 18px;
    }
    .cupon-right {
      margin-left: auto;
    }
  }
  .cupon-title {
    margin-top: 10px;
  }
  .cupons {
    line-height: 30px;
    margin-top: 15px;
    color:#FF0000;
    .cupon-detail {
      margin: 10px;
      padding: 5px 0 0 10px;
      background: url("../../../assets/img/detail/cupon.png");
      background-size: cover;
      text-align: left;
      .value {
        margin-top: 10px;
        .condition {
          margin-left: 5px;
          font-size: 12px;
          color: rgba(211, 211, 211, 1);
        }
      }
      .valid-time {
        font-size: 12px;
        color: rgba(211, 211, 211, 1);
      }
    }
    .receive {
      float: right;
      margin: -54px 6px 0 0;
      font-size: 20px;
    }
  }
  .complete-btn {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FF0000;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 54px;
  }
}
</style>