<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ carLength }})</div>
    </nav-bar>
    <car-list :is-checked="data.checked" />
    <car-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CarList from "./cartComponent/CarList.vue";
import CarBottomBar from "./cartComponent/CarBottomBar.vue";
export default {
  components: { NavBar, CarList, CarBottomBar },
  name: "Cart",
  data() {
    return {
      data: this.$store.state.carList,
    };
  },
  computed: {
    carLength(state) {
      return this.$store.state.carList.length;
    },
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.cart {
  height: 100vh;
  .nav-bar {
    background: #ff5777;
    color: #ffffff;
  }
  .check-btn {
    border-radius: 50%;
    border: 2px solid #aaa;
    width: 20px;
    img {
    }
  }
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    /* bottom: -80%; */
    bottom: 49px;
    z-index: 10;
  }
  .check {
    background-color: red;
    border-color: red;
  }
}
</style>