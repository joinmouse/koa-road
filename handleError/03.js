const Koa = require('koa')
const app = new Koa()

const handler = async function(ctx, next) {
    try {
        await next()
    } catch (err){
        console.log(ctx.response)
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            message: err.message
        }
    }
}

const main = ctx => {
    ctx.throw(500)
}

app.use(handler)
app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')
