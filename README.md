# DazhouBus-Client

达州实时公交 微信小程序客户端，相对于官方 APP 可以提供更好的使用体验。数据需实时向服务端发起请求，因为 [微信小程序必须使用 HTTPS/WSS 发起网络请求](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html) 所以在搭建本项目环境的时候，请确保使用网络相关的 API 时服务端要配置好 HTTPS 同时域名必须经过 ICP 备案。推荐使用 [DazhouBus-Server](https://github.com/blackyau/DazhouBus-Server) 搭建服务端。

## 扫码体验

![达州实时公交车查询小助手](https://st.blackyau.net/share/DazhouBus-Server-Demo-3.jpg)

## 效果图

![效果图1](https://st.blackyau.net/share/DazhouBus-Server-Demo-1.png)

[Denmo视频](https://st.blackyau.net/share/DazhouBus-Demo.mp4)

## 部署方法

下载源码，将项目导入 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html) 即可预览，如果你要将程序发布为线上版本，还需要搭建服务端(推荐使用 [DazhouBus-Server](https://github.com/blackyau/DazhouBus-Server))，因为官方API没有使用HTTPS。

## 常见问题

主页的线路信息不是实时获取的，因为公交线路变化的很少，所以数据是直接通过读取 `pages\index\index.js` 中的 `data.linesData` 来获得。最新数据可以通过 [DazhouBus-Server GetIndexData.py](https://github.com/blackyau/DazhouBus-Server#获取最新主页数据) 来获得。

## 待完成

- 通过单独的配置文件指定API的URL
- 主页的线路搜索功能
- 对已停运车辆给予提示
- 获取实时位置,提供车辆距离最近站点的信息

## License

   Copyright 2019 blackyau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.