const Koa = require('koa')
const app = new Koa()


const main = ctx => {
    if(ctx.request.accepts('xml')){
        ctx.response.type = 'xml';
        ctx.response.body = '<data>hello easy</data>'
    }else if(ctx.request.accepts('json')){
        ctx.response.type = 'json';
        ctx.response.body = {data: 'hello easy'}
    }else if(ctx.request.accepts('html')){
        ctx.response.type = 'html';
        ctx.response.body = '<p>hello easy</p>';
    }else {
        ctx.response.type = 'text';
        ctx.response.body = 'hello easy';
    }
}

app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')