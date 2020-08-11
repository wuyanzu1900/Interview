1. setTimeout
2. Promise
3. 请求
4. addEvent
5. 页面

浏览器内部有很多线程:

1. 定时器触发线程
2. http
3. GUI线程

IntersectionObserver

什么是Event-loop:

    浏览器协调用户交互，渲染，网络等任务

``` js
    setTimeout(() => {
        console.log(1);
    }, 0)
    Promise.resolve(3).then(console.log);
    console.log(2);
```

宏任务，任务
setTimeout产生的任务，整体的一段script
由宿主环境引起的任务

微任务
Promise.then()  MustionObserver Process.nextTick

由js本身引起的任务

## 流程

只要宏任务队列不为空：

 1. 从我们的宏任务(任务)队列取出**一个**执行
 2. 从微任务里面取出**所有**微任务，如果在这执行过程中又产生了微任务，再次重复第2步
 3. 有可能进行浏览器的更新渲染

    1. reqAnimationframe 回调
    2. 执行IntersectionObserver 回调
    3. 重新绘制渲染

以60fps，每一帧花费16.66ms
我们的渲染是
一个宏任务-> 清空微任务 -> 渲染 -> 一个宏任务 ->  清空微任务 -> 渲染 -> 一个宏任务 -> 清空微任务 -> 渲染

``` js
console.log(1)//第一步

setTimeout(function() {
    console.log(2)//第六步
})

new Promise(function(resolve) {
    console.log(3)//第二步
    resolve()
}).then(function() {
    console.log(4)//第三步
}).then(function() {
    console.log(5)第四步
})

console.log(6)//第五步
```
