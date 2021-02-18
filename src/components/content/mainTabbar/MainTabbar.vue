<template>
  <TabBar>
    <TabBarItem path="/home">
      <template #item-icon><img src="../../../assets/img/tabbar/home.svg" alt=""></template>
      <template #item-icon-active><img src="../../../assets/img/tabbar/home_active.svg" alt=""></template>
      <template #item-text><div>首页</div></template>
    </TabBarItem>
    <TabBarItem path="/styleMatch">
      <template #item-icon><img src="../../../assets/img/tabbar/category.svg" alt=""></template>
      <template #item-icon-active><img src="../../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template #item-text><div>穿搭</div></template>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <template #item-icon><img src="../../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template #item-icon-active><img src="../../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template #item-text><div>购物车</div></template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template #item-icon><img src="../../../assets/img/tabbar/profile.svg" alt=""></template>
      <template #item-icon-active><img src="../../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template #item-text><div>我的</div></template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>

</style>
