智慧云办公管理系统

[TOC]



## 一、项目源码

|        | 后端源码 | 前端源码 |
| ------ | -------- | -------- |
| GitHub |          |          |



## 二、系统简介

智慧云办公系统是一个采用SpringBoot+Vue技术开发的前后端分离的项目，云办公系统通过软件的方式，方便快捷处理中小型企业的公司日常事务，能够提高整体的管理运营水平，使得办公更加高效方便，在线即可享受云端办公，一触即达。



本项目主要模块及技术点如下：



![智慧云办公](./images/智慧云办公.png)



技术栈

+ 后端采用SpringBoot、Spring Security、Mybatis-Plus、RabbitMQ、MySQL、WebSocket、FastDFS、EasyPOI、Redis & Jwt等技术。
+ 前端采用Vue 、 ElementU 、Swagger2 UI、 Axios 、 Font-Awesome等。
+ 权限认证使用Jwt。

系统功能

1. 使用SpringBoot集成Swagger2 自动生成接口文档，方便前后端分离项目的共同开发。

2. 使用SpringBoot集成RabbitMQ实现自动发送邮件的功能，添加入职员工信息，自动发送入职信息的邮件。

3. 使用Redis实现内存高速缓存数据库，对员工信息进行缓存处理，实现数据可持久化。



## 三、开发环境及工具

+ JDK 1.8.0_202
+ IDEA 专业版 2020.3.5
+ WebStorm 专业版 2020.2.3
+ Navicat Premium 15
+ SpringBoot 2.3.0.RELEASE
+ Mybatis-Plus 3.3.1.tmp
+ MySQL 8.0.12
+ Redis 5.0.10
+ RabbitMQ 3.8.14
+ Maven 3.6.3
+ Node.js v12.22.1
+ Npm v6.14.12
+ Vue 2.6.11
+ Vuex 3.4.0
+ Vue-cli 4.4.0
+ Vue-Router 3.2.0
+ ElementUI 2.13.2
+ Axios 0.19.2
+ Font-Awesome 4.7.0





## 四、项目效果图

#### 4.0 接口文档

![前后端接口文档](./images/ICOID.png)



#### 4.1 登录

##### 4.1 登录页

![登录页](./images/login.png)

#### 4.2 首页

##### 4.2 首页

![首页](./images/home.png)

#### 4.3 员工资料

##### 4.3.1 员工基本资料 

![员工基本资料](README.assets/empbasic-1625814003790.png)



##### 4.3.2 员工基本资料搜索

![员工基本资料搜索](./images/empsearch.png)

##### 4.3.3 员工基本资料高级搜索

![员工基本资料高级搜索](./images/empAdvSearch.png)

##### 4.3.4 添加员工信息

![添加员工](./images/addEmp.png)



##### 4.3.5 修改员工信息

![修改员工信息](./images/editEmp.png)

##### 4.3.6 删除员工信息

![删除员工信息](./images/delEmp.png)

#### 4.4 薪资管理

##### 4.4.1 工资账套页

![工资账套页](./images/salSob.png)

##### 4.4.2 添加工资账套

![添加工资账套](./images/addSaSob.png)

##### 4.4.3 员工账套页

![员工账套页](./images/empSalSob.png)

##### 4.4.4 修改员工工资账套

![修改员工工资账套](./images/editEmpSalSob.png)

#### 4.5 系统管理

##### 4.5.1 基础信息设置

+ 部门管理页

  ![部门管理](./images/sysbasic.png)

+ 添加部门

  ![添加部门](./images/sysAddDep.png)

  

+ 职位管理

  ![职位管理](./images/sysPos.png)

+ 职称管理

  ![职称管理](./images/sysPro.png)

+ 权限组

  ![权限组](./images/sysPer.png)

## 五、邮件发送

在基本资料页，添加员工信息成功后，会立即通过项目子模块`Mail`监控，进行入职欢迎邮件的发送！

<img src="./images/mail.jpg" alt="邮件发送" style="zoom:30%;" />



## 六、快速部署

项目架构

<img src="./images/structure.png" alt="项目架构" style="zoom:50%;" />

后端仓库

```git
git clone 
```

前端仓库

```git
git clone 
```

### 6.1 后端

使用IDEA打开项目之后，查看是否为Maven环境，更改Maven仓库地址，加载项目依赖！



### 6.2 前端

#### 6.2.1 依赖

```js
# 安装依赖
npm install

# 启动服务 localhost:8080
npm run serve
```

前端使用了很多依赖库。因此，你可能需要安装以下插件：

```javascript
npm install node-sass --save-dev
npm install sass-loader --save-dev

```

Vue使用SockJS实现Websocket通信的插件

```javascript
npm install sockjs-client
npm install stompjs　
```



#### 6.2.2 WebSocket聊天

此项目中，使用了GitHub上开源的一个Vue-chat的聊天模板，即：

[Vue-chat-Demo]: https://github.com/is-liyiwei/vue-Chat-demo	" Vue-chat-Demo"

WebSocket聊天效果如下：

![聊天界面](./images/chat1.png)

![聊天界面](./images/chat2.png)



## 七、前后端运行

|              | 访问地址                       | 端口 |
| ------------ | ------------------------------ | ---- |
| 前端访问     | http://localhost:8080          | 8080 |
| 后端接口文档 | http://localhost:8081/doc.html | 8081 |



## 八、特别致谢

该项目源于B站，带领着我从前端到后端不断深入的学习，上传到仓库的代码均为本人亲自完成，从听课、理解、思考、领悟、手把手敲代码、调试Bug，到完成小半个项目，历时两个月时间左右。该项目是目前我认为最具学习和参考的项目，所以，在此致谢来自B站的优秀老师！

## 总结

智慧云办公系统，还有很多功能并没有完善，本着学习的态度完成了目前该有的样子，还有其他功能，后续再进行完善。在完成此项目的同时，让我对Coding之路有了更深的思考。此外，也让我明白一个大型开发项目的不易，作为开源项目，希望大家共同维护！！！

如果你有任何问题，可以Issues，感谢大家的厚爱！😝❤️



