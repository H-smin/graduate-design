<template>
  <div id="app">
    <keep-alive exclude="Detail,AllOrders,Season">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar v-if="tabbarShow" class="MainTabbar" />
  </div>
</template>
<script>
import MainTabbar from "./components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
  watch: {
    $route(to, from) {
      if (
        to.path == "/" ||
        to.path == "/home" ||
        to.path == "/styleMatch" ||
        to.path == "/profile" ||
        to.path == "/shopcart"
      ) {
        this.$store.commit("updateTabbarShow", true);
      } else {
        this.$store.commit("updateTabbarShow", false);
      }
    },
  },
  computed: {
    tabbarShow() {
      return this.$store.getters.getTabbarShow;
    },
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>