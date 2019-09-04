const Koa = require('koa');
const fs = require('fs')
const app = new Koa();

const main = async function(ctx, next) {
    ctx.response.type = 'html';
    await fs.readFile('./static/template.html', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
    })
    ctx.response.body = 'hello'
}

app.use(main)
app.listen(3000)

console.log('开启一个3000端口的服务, 就是这么简单的呀!!')