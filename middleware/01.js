const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello easy'
}

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

app.use(logger)
app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')