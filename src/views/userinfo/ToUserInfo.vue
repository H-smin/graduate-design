<template>
  <div class="to-user-info">
    <nav-bar class="nav-bar">
      <div slot="left" @click="goBack" class="back">
        <img src="../../assets/img/common/back.svg" />
      </div>
      <div slot="center">个人信息</div>
      <div slot="right" @click="save" class="save">
        <img src="../../assets/img/profile/save.svg" />
      </div>
    </nav-bar>
    <div class="edit-container">
      <van-uploader class="uploader" :after-read="afterRead" preview-image>
        <img :src="info.src" ref="upImgs" />
        <van-button icon="plus" class="up-img">上传头像</van-button>
      </van-uploader>
      <div class="edit-info">
        <div class="edit">
          <span>用户名</span>
          <input v-model="userName" @change="getEditData" />
        </div>
        <div class="edit">
          <span>性别</span>
          <input v-model="gender" @change="getEditData" />
        </div>
        <div class="edit">
          <span>个性签名</span>
          <input v-model="signs" @change="getEditData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { Uploader, Button } from "vant";
export default {
  name: "userInfo",
  components: {
    NavBar,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  data() {
    return {
      info: JSON.parse(this.$route.query.info),
      fileList: [],
      userName: "",
      signs: "",
      gender: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    afterRead(file) {
      this.$refs.upImgs.src = file.content;
      this.fileList.push(file.content);
    },
    getEditData() {},
    save() {
      if(this.fileList.length !== 0){
        this.$store.state.info.src=this.fileList[0]
      }
      this.$store.state.info.userName=this.userName
      this.$store.state.info.gender=this.gender
      this.$store.state.info.signs=this.signs
    },
  },
  mounted() {
    this.userName = this.info.userName;
    this.signs = this.info.signs;
    this.gender = this.info.gender;
  },
};
</script>

<style lang="less" scoped>
.to-user-info {
  .nav-bar {
    background: #ff5777;
    color: #ffffff;
    .back {
      margin-left: 10px;
    }
    .save {
      float: right;
      margin: 4px 10px 0 0;
      img {
        width: 25px;
      }
    }
  }
  .edit-container {
    text-align: center;
    border-radius: 15px 15px 0 0;
    .uploader {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .up-img {
        display: block;
        margin-top: 10px;
        background: rgba(64, 224, 208, 0.5);
      }
    }
    .edit-info {
      text-align: end;
      width: 95%;
      .edit {
        margin-top: 12px;
        font-size: 14px;
        span {
          display: inline-block;
          text-align: justify;
        }
        input {
          display: inline-block;
          border: none;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>