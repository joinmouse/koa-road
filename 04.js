const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./static/template.html')
}

app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')