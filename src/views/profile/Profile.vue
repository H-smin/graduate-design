<template>
  <div class="profile">
    <user-info class="info"/>
    <orders />
  </div>
</template>

<script>
import Orders from "./childComponent/Orders.vue";
import userInfo from "./childComponent/UserInfo.vue";

export default {
  components: { userInfo, Orders },
  name: "Profile",
 
};
</script>

<style lang="less">
.profile {
  background: rgba(255, 130, 171, 0.1);
  .info {
    padding-top: 115px;
  }
}
</style>