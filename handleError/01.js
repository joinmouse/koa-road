const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.throw(500)
}

app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')