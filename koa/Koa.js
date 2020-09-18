const http = require('http')
class koa {
    constructor() {
        this.middlewares = [];
    }
    use(fn) {
        this.middlewares.push(fn)
    }
    listen(port) {
        http.createServer((req, res) => {
            // 在这里可以知道请求进来了，组合洋葱模型
            let THAT = this;
            
            let ctx = {
                set body(val){
                    res.end(val)
                },
                set statusCode(code){
                    // res
                }
            }
            run()
            function run() {
                // 调用next中间键
                dispatch(0);
                function dispatch(index) {
                    let fn = THAT.middlewares[index]
                    // 调用next的时候+1
                    if (!fn) return
                    // (ctx,next) => { await next()}
                    fn(ctx, () => {
                        // 调用next时
                        index++;
                        dispatch(index)
                    })

                }
            }
        })
            .listen(port)
    }
}
let app = new koa()
app.use(async(ctx,next) =>{
    console.log(1)
    await next()
    console.log(1)
})
app.use(async(ctx,next) =>{
    console.log(3)
    await next()
    ctx.body = 'Hello' //会触发get set 行为
    console.log(4)
})
app.listen(9090)