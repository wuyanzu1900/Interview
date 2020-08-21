const person = {
    isHuman:false,
    printIntroduction:function(){
        console.log(`My name is${this.name}.Am I Human?${this.isHuman}`)
    }
}

// 最简单的继承方式
const zm = Object.create(person)
zm.name = '吴彦祖'
zm.isHuman = true
// zm.printIntroduction();
console.log(zm._proto_)
console.log(zm._proto_===Object.prototype)