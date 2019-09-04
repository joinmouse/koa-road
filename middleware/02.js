const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    console.log('---')
    ctx.response.body = 'hello easy'
}

const one = (ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
}

const two = (ctx, next) => {
    console.log('>> two');
    next(); 
    console.log('<< two');
}

const three = (ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
}

app.use(one)
app.use(two)
app.use(three)
app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')