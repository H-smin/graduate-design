<template>
  <div class="match-clothes">
    <div v-for="(item, index) in clothes" :key="index">
      <div class="match-list">
        <img :src="item.src" />
        <div class="desc">
          <span>{{ item.price }}</span>
          {{ item.desc }}
        </div>
        <div class="commend" @click="changeModel(index)" :key="index">
          <img class="icon" src="../../../assets/img/match/match.svg" />
          <div class="title">搭配推荐</div>
        </div>
      </div>
    </div>

    <van-overlay :show="show" class="van-overlay">
      <div class="wrapper" @click="changeModelWra">
        <div class="block">
          <clothes-show :clothes="itemClothes" :diffClothes="diffClothes" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import ClothesShow from "./ClothesShow.vue";
import { Overlay } from "vant";
export default {
  name: "MatchClothes",
  components: {
    ClothesShow,
    [Overlay.name]: Overlay,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    clothes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      type: "",
      show: false,
      itemClothes: {},
      itemIndex: "",
      diffClothes: [],
    };
  },
  methods: {
    changeModel(index) {
      this.show = !this.show;
      this.itemIndex = index;
      // console.log(this.itemIndex);
      this.getDiffClothes();
    },
    changeModelWra() {
      this.show = !this.show;
    },
    getDiffClothes(index) {
      let newDiffClothes = [];
      for (let i = 0; i < this.clothes.length; i++) {
        if (index !== i) {
          if (this.itemClothes.type !== this.clothes[i].type) {
            newDiffClothes.push(this.clothes[i]);
          }
        }
      }
      this.diffClothes = newDiffClothes;
    },
  },
  watch: {
    itemIndex(val, newval) {
        this.itemClothes = this.clothes[val];
       //console.log(val)
      },
      immediate: true
  },
};
</script>

<style lang="less" scoped>
.match-clothes {
  overflow: hidden;
  .match-list {
    margin: 10px 9px;
    width: 45%;
    float: left;
    text-align: center;
    border: 1px solid pink;
    border-radius: 10px;
    box-shadow: 1px 0 10px pink;
    .commend {
      float: right;
      position: relative;
      margin: -140px 8px 0 0;
      width: 55px;
      border-radius: 10px;
      background: rgba(255, 233, 233, 0.5);
      .icon {
        width: 25px;
      }
      .title {
        margin-top: -10px;
        padding-bottom: 5px;
        font-size: 12px;
        color: #ffa500;
      }
    }
    img {
      margin: 10px;
      width: 132px;
      border-radius: 10px;
    }
    .desc {
      overflow: hidden;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      width: 100%;
      text-align: left;
      text-indent: 10px;
      font-size: 16px;
      span {
        font-size: 24px;
        color: #f55777;
      }
    }
  }
  .van-overlay {
    background: rgba(0, 0, 0, 0.3);
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .block {
        width: 80%;
        height: 80%;
        background-color: #fff;
      }
    }
  }
}
</style>