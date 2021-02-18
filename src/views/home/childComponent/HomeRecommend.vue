<template>
  <div class="recommend">
      <div class="re-item-box" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt=""/>
              <div class="title">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
.recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #cccccc;
    text-align: center;
    font-size: 12px;
    .re-item-box {
        flex: 1;
        text-align: center;
        img {
            width: 80%;
            margin-bottom: 10px;
        }
    }
}
</style>