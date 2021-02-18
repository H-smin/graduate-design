<template>
  <div class="detail-comment">
    <div class="comment-head">
      <span>商品评价</span>
      <span class="more">更多...</span>
    </div>
    <div class="comment-content">
      <div class="img-name">
        <img :src="comment.imgSrc" alt="" />
        <div class="user-name">{{ comment.userName }}</div>
      </div>
      <div class="content">{{ comment.content }}</div>
      <div class="time">
        {{ comment.releaseTime }}
        |
        <span>尺码: {{ comment.size }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  data() {
    return {
      comment: this.$store.state.commentInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.detail-comment {
  margin-top: 10px;
  text-align: left;
  color:rgba(0, 0, 0, 0.5);
  .comment-head {
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #cccccc;
    font-size: 17px;
    text-indent: 15px;
    color: #666666;
    .more {
      margin-left: auto;
      margin-right: 15px;
      font-size: 14px;
    }
  }
  .img-name {
    overflow: hidden;
    line-height: 25px;
    img {
    float: left;
    margin-left: 17px;
    border-radius: 30px;
  }
  .user-name {
    margin: 10px 0 0 80px;
    font-size: 18px;
  }
  }
  .content {
    margin-top: 8px;
    text-indent:14px;
    font-size: 18px;

  }
  .time {
    margin-top: 5px;
    text-indent: 14px;
    font-size: 14px;
  }
}
</style>