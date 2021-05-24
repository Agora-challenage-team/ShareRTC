<template>
  <el-container>
    <div class="left">
    <!-- 白色侧边栏  -->
    <el-row class="tac">
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    </div>
    <!-- 分隔符  -->
    <div>
      <el-card style="width: 800px;height: 500px">
      <img style="height: auto;width: 300px" src="../assets/video-share.svg">
      <h1>{{ msg }}</h1>
      </el-card>
    </div>
    </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Our Team\'s Vue.js Project',
      isCollapse: false
      // isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
/*自定义样式*/
  .left{
    width: 500px;
    height: auto;
    border: 1px solid black
  }
/*侧边栏样式*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
