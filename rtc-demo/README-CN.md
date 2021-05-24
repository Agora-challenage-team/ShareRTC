# AppRTC-NodeJS实现googlewebrtc演示

## 关于

AppRTC node server是google webRTC演示中AppRTC Python服务器的一个直接端口，完全在NodeJS环境中运行。

## 注意事项

这项工作仍在进行中。我们正在清理代码并进行一些增强：

1.作为一个节点模块实现，这样您就可以轻松地适应您的项目

2.重构代码以优化NodeJS

3.实现memcache或redis集群扩展视频聊天会话的选项

4.提供更多文档和扩展性

5.添加内置的Turn服务器以提高WebRTC的可移植性

##设置

设置环境只需要以下几点：

```
git clone https://github.com/ISBX/apprtc-node-server.git ./apprtc-node-server
cd ./apprtc-node-server
npm install
```

##运行AppRTC节点服务器

appRTC节点服务器使用ExpressJS。要在安装后运行节点服务器，只需执行：

```
node ./bin/www
```

导航到`http://localhost：3000`运行WebRTC演示
