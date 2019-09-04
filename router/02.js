const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello easy'
}

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
}

app.use(route.get('/', main))
app.use(route.get('/about', about))

app.listen(3333)
console.log('开启一个3000端口的服务, 就是这么简单的呀!!')
