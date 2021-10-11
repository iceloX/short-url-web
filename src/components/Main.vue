<template>
  <div class="hello">
    <h1>WAY's 短链服务</h1>
    <div class="url-input">
      <el-input placeholder="请输入内容"></el-input>
    </div>
    <div class="buttons">
      <el-button round type="primary">清空</el-button>
      <el-button round type="success">生成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.url-input {
  width: 35%;
  position: relative;
  left: 32%;
}
.buttons {
  margin-top: 50px;
}
</style>
