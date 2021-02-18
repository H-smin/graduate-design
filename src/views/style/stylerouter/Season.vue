<template>
  <div class="season">
    <nav-bar class="style-nav">
      <div slot="left" @click="goBack">
        <img src="../../../assets/img/common/back.svg" />
      </div>
      <div slot="center">{{ items.matchTitle }}</div>
    </nav-bar>
    <style-bar :items="items" :id="id"/>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
import StyleBar from "../childComponent/StyleBar.vue";
export default {
  components: { StyleBar, NavBar },
  name: "Season",
  data() {
    return {
      items: this.$route.query.item,
      id:parseInt(this.$route.query.id)
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.season {
  padding-top: 44px;
  .style-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: #f55777;
    color: #ffffff;
  }
}
</style>