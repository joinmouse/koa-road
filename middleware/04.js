const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

const main = ctx => {
    ctx.response.body = 'hello easy'
}

const middleware = compose([logger, main])
app.use(middleware)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')