<template>
  <div class="good-list">
    <div>今日推荐</div>
    <div class="goods">
      <good-list-item :listItem="homeList" />
    </div>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name:"GoodList",
  components:{
    GoodListItem
  },
  props:{
    homeList:{
      type:Array,
      default:() => []
    }
  },
  mounted(){
    console.log(this.homeList)
  }
 
}
</script>

<style lang="less">
.good-list {
  margin: 30px 0;
  text-align: center;
  font-weight: 500;
}
</style>