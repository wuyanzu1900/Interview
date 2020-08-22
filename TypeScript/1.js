const getUserInfo = function(user){
    return `name:${username},age:${user.age}`
}
getUserInfo({name:'haha',age:18})

getUserInfo()
getUserInfo({name:'haha'})
getUserInfo({name:'haha',height:1.66})
// 利用返回值
// readme