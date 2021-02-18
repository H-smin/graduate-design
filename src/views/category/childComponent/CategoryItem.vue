<template>
  <div class="category-item">
    <van-cell class="list-item" v-for="(item, index) in jacket" :key="index" @click="goDetail(item)">
          <img :src="item.src" />
          <span class="price">￥{{ item.price }}</span>
          <span v-if="!!item.discount" class="discount">{{ item.discount }}折</span>
          <div class="title">{{ item.productName }}</div>
      </van-cell>
  </div>
</template>

<script>
import GoodListItem from '../../../components/content/goods/GoodListItem.vue'
import {Cell} from 'vant'
export default {
  components: { 
    [Cell.name]:Cell
     },
  name:"CategoryItem",
  props:{
    coatData:{
      type:Array,
      default:() => []
    }
  },
  data(){
    return{
      jacket:[]
    }
  },
  methods:{
    getJacket(){
      this.jacket=this.coatData.filter( (value,index) => {
        return value.proId === "1_1" || value.proId === "1_2"
      })
    },
    goDetail(item){
      let productInfo=JSON.stringify(item)
      this.$router.push({name:'Detail',query:{productInfo}})
    }
  },
  mounted(){
    this.getJacket()
  }
}
</script>

<style lang="less" scoped>
.list-item {
    float: left;
    width: 50%;
    img {
      width: 100%;
      border-radius: 5px;
      box-shadow: 5px 0 5px #cccccc;
    }
    .discount {
      font-size: 12px;
      color: rgba(173, 173, 173, 0.76);
    }
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-align: left;
      width: 100%;
      font-size: 13px;
      color: #585c64;
    }
    .price {
      font-weight: 500;
      font-size: 18px;
      margin-right: 8px;
    }
  }
</style>