<template>
  <el-container>
    <div class="left" ref="left">
      <!-- <el-card>
        白色侧边栏 
        <el-row class="tac">
          <el-col :span="12"> -->
      <!-- <h5>自定义颜色</h5> -->
      <!-- <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :collapse="isCollapse"
            > -->
      <!-- <el-menu-item index="1" class="el-menu-ver-item">
                <i class="el-icon-user-solid" num="1"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="2" class="el-menu-ver-item">
                <i class="el-icon-s-custom" num="2"></i>
                <span slot="title">联系人</span>
              </el-menu-item>
              <el-menu-item index="3" class="el-menu-ver-item">
                <i class="el-icon-video-camera" num="3"></i>
                <span slot="title">加入视频</span>
              </el-menu-item>
              <el-menu-item index="4" class="el-menu-ver-item">
                <i class="el-icon-edit-outline" num="4"></i>
                <span slot="title">文档编写</span>
              </el-menu-item>

              <el-menu-item index="5" @click="handleToggle" class="el-menu-ver-item">
                <i class="el-icon-back" num="5"></i>
                <span slot="title">收起</span>
              </el-menu-item> -->
      <el-drawer title="个人信息" :visible.sync="drawer" :direction="direction">
        <span>个人信息</span>
      </el-drawer>

      <div class="left_menu">
        <div class="userMsg" @mouseenter="handleToShow" @mouseleave="handleToHid">
          <i class="el-icon-user-solid"></i>
          <span num="0">个人信息</span>
        </div>
        <div class="chatMsg" @mouseenter="handleToShow" @mouseleave="handleToHid">
          <i class="el-icon-chat-dot-round"></i>
          <span num="1">聊天消息</span>
        </div>
        <div class="createMeeting" @mouseenter="handleToShow" @mouseleave="handleToHid">
          <i class="el-icon-video-camera"></i>
          <span num="2">创建会议</span>
        </div>
        <div class="addMeeting" @mouseenter="handleToShow" @mouseleave="handleToHid">
          <i class="el-icon-circle-plus"></i>
          <span num="3">加入会议</span>
        </div>
      </div>
      <!-- </el-menu> -->
      <!-- </el-col>
        </el-row>
      </el-card> -->
    </div>

    <!-- 分隔符  -->
    <router-view></router-view>
    <!-- <div>
      <el-card style="width: 1200px; height: 674px; margin-left: 20px">
        <h1 style="font-size: 50px">
          <b>{{ msg }}</b>
        </h1>
        <img style="height: auto; width: 300px" src="../assets/vide-call.svg" />
        <img
          style="height: auto; width: 300px; margin-top: 100px"
          src="../assets/video-share.svg"
        />
        <img style="height: auto; width: 300px" src="../assets/video-conference.svg" />
      </el-card>
    </div> -->
  </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      msg: "欢迎接入webRTC视频会议",
      // isCollapse: false,
      height: "", // 浏览器高度
      drawer: false,
      direction: "ltr",
    };
  },
  // 初始化函数
  created() {
    this.height = document.documentElement.clientHeight;
    // console.log(this.height)
  },
  methods: {
    handleToShow(e) {
      e.target.children[1].style.visibility = "visible";
    },
    handleToHid(e) {
      e.target.children[1].style.visibility = "hidden";
    },
    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*自定义样式*/
.left {
  width: 80px;
  height: auto;
  /*border: 1px solid black*/
}

.left_menu {
  position: relative;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.left_menu div {
  width: 3rem;
  height: 3rem;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0 0 0.5rem rgb(58, 54, 54);
  border-radius: 50%;
  margin: 0.625rem 0;
  text-align: center;
  line-height: 3.5rem;
  cursor: pointer;
  position: relative;
}

.left_menu div span {
  display: block;
  position: absolute;
  right: -100px;
  top: 5px;
  background: rgba(0, 0, 0, 0.5);
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  text-align: center;
  line-height: 40px;
  visibility: hidden;
  z-index: 999;
}

.left_menu div i {
  display: inline-block;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
}

.left_menu div:hover {
  background: rgb(99, 99, 221);
  color: #fff;
  font-weight: 800;
  animation: twinkle 1.2s ease-in-out infinite;
}

@keyframes twinkle {
  25% {
    box-shadow: 0 0 1rem rgb(62, 14, 139);
  }
  50% {
    box-shadow: 0 0 1.5rem rgb(197, 173, 173);
  }
  100% {
    box-shadow: 0 0 0.5rem rgb(58, 54, 54);
  }
}

/*侧边栏样式*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 80px;
  /*min-height: 400px;*/
  min-height: 634px;
  border-radius: 1rem;
}

/*  分割线*/
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
</style>
