const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const redirect = ctx => {
    ctx.response.redirect('/')
}
const main = ctx => {
    ctx.response.body = 'hello easy'
}

app.use(route.get('/', main))
app.use(route.get('/redirect', redirect))

app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')
