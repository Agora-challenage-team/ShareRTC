<template>
  <el-card class="el_card">
    <h1 style="font-size: 50px">
      <b>{{ msg }}</b>
    </h1>
    <div class="logReg">登录 / 注册</div>
    <img style="height: auto; width: 300px" src="../assets/vide-call.svg" />
    <img
      style="height: auto; width: 300px; margin-top: 100px"
      src="../assets/video-share.svg"
    />
    <img style="height: auto; width: 300px" src="../assets/video-conference.svg" />
  </el-card>
</template>

<script>
export default {
  name: "initMsg",
  data() {
    return {
      msg: "欢迎接入webRTC视频会议",
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el_card {
  width: 1200px;
  height: 674px;
  margin-left: 80px;
}

.logReg {
  width: 150px;
  height: 60px;
  background: rgb(99, 99, 221);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(58, 54, 54);
}

.logReg:hover {
  box-shadow: 0 0 20px rgb(31, 26, 26);
}
</style>
