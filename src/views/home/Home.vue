<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">衣橱控</div></nav-bar>
    <div ref="scroll" id="scroll">
      <swipe />
      <home-recommend :recommends="recommends" />
      <feature />
      <good-list :homeList="homeList" />
    </div>
    <div v-if="scrollTop > 300"><back-top @click.native="backTop" /></div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Swipe from "./childComponent/Swipe";
import HomeRecommend from "./childComponent/HomeRecommend.vue";
import Feature from "./childComponent/Feature";
import { getHomeMultidata } from "../../network/home";
import GoodList from "../../components/content/goods/GoodList.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import axios from 'axios';

export default {
  name: "Home",
  components: {
    NavBar,
    Swipe,
    HomeRecommend,
    Feature,
    GoodList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      scrollTop:'',
      saveY:'',
      homeList:[]
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      (this.banners = res.data.banner.list),
        (this.recommends = res.data.recommend.list);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getData()
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(this.scrollTop)
    },
    backTop(){
      window.scrollTo(0,-this.scrollTop,2000)
    },
    getData(){
      axios.get('/data/homeList.json')
      .then( data => {
        this.homeList=data.data
        //console.log(this.homeList)
      }).catch( err => {
        console.log(err)
      })
    }
  },
  activated(){
    window.scrollTo(0,this.saveY)
  },
  deactivated(){
    this.saveY=this.scrollTop
  }
};
</script>

<style lang='less'>
#home {
  padding-top: 44px;
  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-color: #f55777;
    color: #ffffff;
  }
}
</style>