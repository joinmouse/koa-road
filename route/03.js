const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

// 访问localhost:3000/01.js
const main = static(path.join(__dirname)) 

app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')