const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.throw(500)
}

app.on('error', (err, ctx) => {
    console.error('serve error', err)
})

app.listen(3000)
app.use(main)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')
