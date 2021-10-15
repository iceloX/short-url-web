<template>
  <div class="hello">
    <h1>WAY's 短链服务</h1>
    <el-form
      :model="urlForm"
      :rules="rule"
      ref="urlForm"
      label-width="100px"
      class="url-input"
    >
      <el-form-item prop="url">
        <el-input v-model="urlForm.url"></el-input>
      </el-form-item>
      <el-form-item prop="url">
        <el-button type="primary" @click.prevent="submit()">立即生成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import mainconst from "../constants/main.constants";
export default {
  name: "Main",
  data() {
    //------------------必须以英文与汉字开头的正则------------------//
    let urlReg = mainconst.URL_REGX;
    var validateUrl = (rule, value, callback) => {
      if (!urlReg.test(value)) {
        callback(new Error("请输入正确的网址"));
      }
    };
    return {
      urlForm: {
        url: "",
      },
      rule: {
        url: [
          { required: true, message: "请输入正确的网址", trigger: "blur" },
          { validator: validateUrl, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submit() {
      var url = this.urlForm.url;
      var currentTime = new Date().getTime();
      axios({
        method: "post",
        data: {
          origin: url,
          currentTime: currentTime,
        },
        url: "http://localhost:18880/url",
      }).then(function(resp) {
        console.log(resp.data);
      });
    },
    reset() {
      // 设置为空
      this.website = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.url-input {
  width: 35%;
  position: relative;
  left: 28%;
}
.buttons {
  margin-top: 50px;
}
</style>
