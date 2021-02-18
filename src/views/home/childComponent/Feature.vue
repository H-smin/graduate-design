<template>
  <div class="feature">
      <div class="grid" v-for="(item, index) in data" :key="index">
        <a :href="item.link">
          <img :src="item.url" alt="" />
          <div class="feature-cate">{{ item.name }}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  data() {
    return {
      data: this.$store.state.moduleHome.feature,
    };
  },
  mounted(){
       //console.log(this.$store.state.moduleHome.feature)
  }
};
</script>

<style lang="less">
.feature {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    .grid {
        flex: 1;
        font-size: 12px;
        a {
            img {
                width: 95px; 
            }
            .feature-cate {
                margin-top: -15px;
            }
        }
        padding-bottom: 10px;
    }
        
}
</style>