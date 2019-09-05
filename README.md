# koa

## node版本: 10.15.3
## npm版本: 6.4.1

### 一、架设简单的webserve
#### 01、安装koa, 架设一个简单的webserve

#### 02、 Koa提供一个Context对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）

#### 03、通过ctx.request.accepts(type), 来返回对应的ctx.response.type

#### 04、读取模板文件 static/template


### 二、路由
#### 01、ctx.request.path 可以获取用户请求路径，实现简单的路由

#### 02、使用koa-route来实现简单的路由#

#### 03、使用koa-static来处理静态资源加载

#### 04、使用ctx.response.redirect('/')来实现重定向


### 三、中间件(middleware)
#### 01、 中间件: 处于http request和http response中间，来实现某种功能，这里主要以log为例子

#### 02、 中间件栈，在koa中间件是通过next()来传递给下一级的

#### 03、 对于异步中间件，需引入async/await 来处理

#### 04、 使用koa-compose 合成中间件


### 四、错误处理(handle error)
#### 01、ctx.throw(500), 抛出500错误

#### 02、