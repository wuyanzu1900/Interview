let mid1 = async(ctx,next) =>{
    console.log(1)
    await next() // await next === mid2
    console.log(2)
}
let mid2 = async(ctx,next) =>{
    console.log(3)
    await next()
    console.log(4)
}
let mids = [mid1,mid2]
run()
function run(){
    // 调用next中间键
    dispatch(0);
    function dispatch(index){
        let fn = mids[index]
        // 调用next的时候+1
        if(!fn)return
        fn({},()=>{
            // 调用next时
            index++;
            dispatch(index)
        })
        
    }
}