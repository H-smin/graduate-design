<template>
  <div class="detail-img">
    <div class="detail-img-title">图文详情</div>
    <div class="img-container" v-for="(item,index) in imgs.topImg" :key="index">
      <img :src="item" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailImg',
  props:{
    imgs:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{

  },
}
</script>

<style lang="less" scoped>
.detail-img {
  margin-top: 20px;
  text-align: center;
 .detail-img-title {
   font-size: 20px;
 }
 .img-container {
   border-radius: 5px;
   margin: 10px 0;
   img {
     width: 80%;
   }
 }
}
</style>