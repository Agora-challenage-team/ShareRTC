# ShareRTC项目
首先，明确一点：本项目是有两部分项目，
分别是自己构建的vue项目和基于webRTC samples构建的webRTC-node的demo项目

分别位于主目录ShareRTC和主目录下的rtc-demo子目录下👉

下面我们将对项目依赖进行安装并运行：
## 步骤
#### 一、查看webRTC的演示demo
``` bash
# 切换到rtc-demo目录
cd rtc-demo

# 安装依赖
npm install

# 运行
node ./bin/www
```
运行完成之后，打开 http://localhost:3000 查看运行效果
#### 二、运行本项目 🚀
切换回主目录，进行主项目的安装与运行
```bash
# 切换目录
cd ../

# 安装依赖
npm install

# 运行
npm run dev
```
打开浏览器 http://localhost:8080 ，查看运行效果

#### 三、项目开发
项目的框架的构建完毕，可以进行功能模块的开发了。项目的功能<br>
对标Google metting，另外本项目以及安装了 elementUI 框架的包，
需要引入在 App.vue 中全局引入即可.

本项目暂时没有与Java后端对接，目前基于Agora SDK的功能可以不
考虑后端的引入，如果要加的话再配合跨域即可.

#### 四、存在的问题
就是将 rtc-demo 的代理到公网服务器中，会出现需要turn服务器进行
穿透才能穿透成功的问题，目前还需要配置一下webRTC的turn服务.

#### 目前进度
* 目前正在实现左边的侧边栏功能样式
* 接下来就是右边视频会议主题功能，接入声网SDK
* ......
