<template>
  <div class="hello">
    <h1>WAY's 短链服务</h1>
    <el-form
      :model="urlForm"
      :rules="rules"
      ref="urlForm"
      label-width="100px"
      class="url-input"
    >
      <el-form-item prop="url">
        <el-input v-model="urlForm.url"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click.prevent="submitForm()"
          >立即生成</el-button
        >
        <el-button @click="resetForm('urlForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from "axios";
import mainconst from "../constants/main.constants";
import axios from "axios";

export default {
  name: "Main",
  data() {
    //------------------必须以英文与汉字开头的正则------------------//
    let urlReg = mainconst.URL_REGX;
    var validateUrl = (rule, value, callback) => {
      if (!urlReg.test(value)) {
        callback(new Error("请输入正确的网址!"));
      }
      callback();
    };
    return {
      urlForm: {
        url: "",
      },
      rules: {
        url: [
          { required: true, message: "请输入正确的网址!", trigger: "blur" },
          { validator: validateUrl, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["urlForm"].validate((valid) => {
        if (valid) {
          var url = this.urlForm.url;
          var currentTime = new Date().getTime();
          axios
            .post(mainconst.SERVICE_URL + "/url", {
              origin: url,
              currentTime: currentTime,
            })
            .then((resp) => {
              if (resp.data.code == mainconst.SUCCESS_CODE) {
                console.log(resp.data);
                this.$msgbox.alert(
                  mainconst.ROOT_URL + resp.data.data.suffix,
                  "生成成功",
                  {
                    confirmButtonText: "确定",
                    callback: (action) => {
                      this.$message({
                        type: "info",
                        message: `action: ${action}`,
                      });
                    },
                  }
                );
              } else {
                this.$notify.error({
                  title: "生成失败",
                  dangerouslyUseHTMLString: true,
                  message:"<a href='https://github.com/iceloX/short-url-service/issues'>立即反馈</a>",
                  duration: 0,
                });
              }
            })
            .catch((error)=> {
              this.$notify.error({
                title: "生成失败",
                dangerouslyUseHTMLString: true,
                message: error+"</br>"+"<a href='https://github.com/iceloX/short-url-service/issues'>立即反馈</a>",
                duration: 0,
              });
            });
        } else {
          this.$notify.error({
            title: "生成失败",
            message: "请求失败！",
            duration: 0,
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
