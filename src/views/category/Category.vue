<template>
  <div class="match">
    <nav-bar class="nav-bar">
      <div slot="left" @click="goBack" class="back">
        <img src="../../assets/img/common/back.svg" />
      </div>
      <div slot="center">分类</div>
    </nav-bar>
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="active"
      class="select"
    >
      <template #content class="content">
        <img v-if="active === 0" src="../../assets/img/category/bg.jpg" class="imgCl" />
        <div v-for="(item, index) in items" :key="index">
          <category-item v-if="active === index +1" :coatData="coats" />
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { TreeSelect, Image } from "vant";
import axios from "axios";
import CategoryItem from "./childComponent/CategoryItem.vue";
export default {
  name: "Category",
  components: {
    NavBar,
    [TreeSelect.name]: TreeSelect,
    [Image.name]: Image,
    CategoryItem,
  },
  data() {
    return {
      active: 0,
      items: [
        { text: "精选推荐" },
        { text: "冬季新品" },
        { text: "外套" },
        { text: "毛衣" },
        { text: "卫衣" },
        { text: "裤子" },
        { text: "打底衫" },
        { text: "裙装" },
        { text: "套装" },
        { text: "包包" },
        { text: "女鞋" },
        { text: "配饰" },
      ],
      coats: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getCoatData() {
      axios
        .get("/data/coat.json")
        .then((data) => {
          this.coats = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCoatData();
  },
};
</script>

<style lang="less" scoped>
.match {
  padding-top: 40px;
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    background: #ff5777;
    color: #ffffff;
    .back {
      margin-left: 10px;
    }
  }
  .select {
    position: fixed;
    .content {
      margin-left: 20px;
    }
    .imgCl {
        width: 90%;
      }
  }
}
</style>