<template>
  <div class="style-match">
    <nav-bar class="style-nav">
      <div slot="center">穿搭</div>
    </nav-bar>
    
    <match-item :category="matchCategory" />
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "vant";
import NavBar from "../../components/common/navbar/NavBar.vue";
import MatchItem from "./childComponent/MatchItem.vue";
export default {
  name: "StyleMatch",
  components: {
    NavBar,
    [Collapse.na]: Collapse,
    [CollapseItem.name]: CollapseItem,
    MatchItem,
  },
  data() {
    return {
      activeNames: ["1"],
      matchCategory: [
        {
          matchTitle: "季节",
          matchContent: ["春", "夏", "秋", "冬"],
        },
        {
          matchTitle: "风格",
          matchContent: ["干练优雅", "少女心", "小清新", "民族风", "通勤装"],
        },
        {
          matchTitle: "场合",
          matchContent: ["职场", "居家", "逛街", "聚会"],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.style-match {
  padding-top: 44px;
  .style-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: #f55777;
    color: #ffffff;
  }
}
</style>