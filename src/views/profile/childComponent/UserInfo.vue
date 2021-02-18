<template>
  <div class="user-info" @click="goUserInfo">
    <img :src="info.src" alt="" />
    <div class="user-name">{{ info.userName }}</div>
    <div class="signs">{{ info.signs }}</div>
  </div>
</template>

<script>
export default {
  name: "UseInfo",
  data() {
    return {
      info:{}
    };s
  },
  methods: {
    goUserInfo() {
      let info=JSON.stringify(this.info)
      this.$router.push({ path: "/userinfo", query: { info: info } });
    },
  },
  mounted(){
    this.info=this.$store.state.info
  }
};
</script>

<style lang="less" scoped>
.user-info {
  text-align: center;
  border-radius: 15px 15px 0 0;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-name {
    line-height: 22px;
    font-weight: 500;
    font-size: 16px;
  }
  .signs {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>