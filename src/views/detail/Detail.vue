<template>
  <div class="detail">
    <nav-bar class="detail-nav">
      <div slot="left" @click="goBack">
        <img src="../../assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title-container">
        <div
          class="title"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in title"
          :key="index"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
    <detail-show :show="data" />
    <detail-cupon />
    <detail-service />
    <detail-comment />
    <detail-img :imgs="data" />
    <detail-bottom-bar @addCar='addToCar' />
    <div v-if="scrollTop > 300"><back-top @click.native="backTop" /></div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import DetailCupon from "./childComponent/DetailCupon.vue";
import DetailImg from "./childComponent/DetailImg.vue";
import DetailService from "./childComponent/DetailService.vue";
import DetailShow from "./childComponent/DetailShow.vue";
import DetailComment from "./childComponent/DetailComment";
import DetailBottomBar from "./childComponent/DetailBottomBar.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import { Toast } from 'vant';

export default {
  name: "Detail",
  components: {
    NavBar,
    DetailShow,
    DetailCupon,
    DetailService,
    DetailImg,
    DetailComment,
    DetailBottomBar,
    BackTop,
  },
  data() {
    return {
      data: JSON.parse(this.$route.query.productInfo),
      title: ["商品"],
      currentIndex: 0,
      scrollTop: "",
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    goBack() {
      this.$router.go(-1);
    },
    handleScroll() {
      this.scrollTop =
        window.pageYoffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //console.log(this.scrollTop)
    },
    backTop() {
      window.scrollTo(0, -this.scrollTop, 2000);
    },
    addToCar(){
     //获取购物车需要展示的信息
     const product={};
     product.sort=this.data.sort;
     product.id=this.data.id;
     product.image=this.data.src;
     product.price=this.data.price;
     product.productName=this.data.productName;
     //将商品添加到购物车
     this.$store.commit('addCar',product)
     Toast("已成功添加至购物车")
     //console.log(this.$store.state.carList[0].checked)
     window.localStorage.setItem('key',JSON.stringify(this.$store.state.carList));
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less">
.detail {
  text-align: center;
  .detail-nav {
    .title-container {
      display: flex;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.5);
      .title {
        flex: 1;
      }
    }
  }
  .active {
    color: #ff5777;
  }
}
</style>