<template>
  <div class="match-item">
    <div class="item-container" v-for="(item, index) in category" :key="index">
      <div class="item-title">{{ item.matchTitle }}</div>
      <div class="item-list">
        <div
          v-for="(listItem, indexItem) in item.matchContent"
          :key="indexItem"
        >
          <router-link
            :to="{
            path:'/stylerouter',
            query:{
              id:indexItem,
              item:item
            }
            }"
          >
            <div class="list-category">{{ listItem }}</div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchItem",
  props: {
    category: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return {
      id:1
    }
  }
};
</script>

<style lang="less" scoped>
.match-item {
  text-align: center;
  .item-container {
    .item-title {
      line-height: 60px;
      background: linear-gradient(to right, #a8edea, #fed6e3);
      font-size: 20px;
      border-radius: 30px 0 30px 0;
    }
    .item-list {
      overflow: hidden;
      margin: 24px;
      font-size: 16px;
      .list-category {
        float: left;
        margin: 10px;
        width: 78px;
        line-height: 40px;
        border-radius: 10px;
        background: #fed6e3;
      }
    }
  }
}
</style>