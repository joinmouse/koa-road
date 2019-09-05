const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    const num = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', num)
    ctx.response.body = `<h1>${num}</h1> views`
}

app.use(main)
app.listen(3000)
console.log('开启一个3000端口的服务, 就是这么简单的呀!!')
