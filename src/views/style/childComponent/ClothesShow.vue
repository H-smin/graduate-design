<template>
  <div class="clothes-show">
    <div class="main-item">
      <img :src="clothes.src" class="img-style" />
      <div class="main-desc">{{ clothes.desc }}</div>
    </div>
    <div class="vice-commend">
      <div
        v-for="(item, index) in diffClothes"
        :key="index"
        class="commend-item"
      >
        <img :src="item.src" class="vice-img" />
        <div class="vice-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClothesShow",
  props: {
    clothes: {
      type: Object,
      default: () => {},
    },
    diffClothes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.clothes-show {
  @margin:10px 0 0 10px;
  @width: 40%;
  @font: 13px;
  .main-item {
    overflow: hidden;
    border-bottom: 1px solid pink;
    padding-bottom: 3px;
    img {
      float: left;
      margin: @margin;
      width: @width;
      border-radius: 10px;
    }
    .main-desc {
      margin-top: 40px;
      font-size: @font;
    }
  }
  .vice-commend {
    margin: 5px 0;
    .commend-item {
      overflow: hidden;
      margin: 15px 0;
      .vice-img {
        float: left;
        width: @width;
      }
      .vice-desc {
        margin-top: 40px;
        font-size: @font;
      }
    }
  }
}
</style>