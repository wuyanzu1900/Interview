let obj = {a:'1',b:{c:2},d:[1,2,3]}
// 深拷贝
let val = null
// ?当数据在更新时通知一下模板
Object.defineProperty(obj, 'a',{
    set:function(newVal){
        // 未来通知template更新
        console.log('change value')
        val = newVal
    },
    get: function() {
        console.log('get value')
        return val
    }
})
obj.a = 2
obj.a
