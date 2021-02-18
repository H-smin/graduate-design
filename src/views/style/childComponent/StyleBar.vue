<template>
  <div class="style-bar">
    <van-tabs v-model="active" :title-active-color="color" :color="color">
      <van-tab v-for="(item, index) in items.matchContent" :key="index" :title=" item ">
       <match-clothes v-if="index === 0" :index="index" :clothes="clothes.spring"/>
       <match-clothes v-else-if="index === 1" :index="index" :clothes="clothes.summer"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
import { Tab, Tabs } from "vant";
import axios from 'axios';
import MatchClothes from './MatchClothes.vue';
export default {
  components: {
    NavBar,
    MatchClothes,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  name: "StyleBar",
  props: {
    items: {
      type: Object,
      default: () => {},
    },
    id:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      active:this.id,
      color:"#f55777",
      clothes:{}
    }
  },
  mounted(){
    axios.get('/data/season.json')
    .then(data => {
      this.clothes=data.data
    })
    .catch(err => {
      console.log(err)
    })
    //console.log(this.id)
  }

};
</script>

<style lang="less" scoped>
.style-bar {
  .style-detail {
  }
}
</style>