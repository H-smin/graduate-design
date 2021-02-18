<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if=" !isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      //isActive: true,
    };
  },
  computed: {
    isActive() {
        return this.$route.path.indexOf(this.path) !== -1
       
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang='less'>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  img {
    margin: 3px 0 2px 0;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
}
.active {
  color: #ff5777;
}
</style>