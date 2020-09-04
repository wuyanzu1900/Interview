// 数据结构由什么组成
// ADT 数据和操作数据方法
// 栈实现什么操作 FILO(先进后出)
// 元数据  items:any[]
// 方法: constrctor
// 入栈: push
// 出栈：pop
// peek 获取栈顶元素  
// 数量 size
// 是否为空 isEmpty
// 清空 clear
// toString 输出

var arr:any = []

function popstack(arr1:any){
    if(arr1 == null){
        return null;
    }
    
}

export default class stack{
    private items:any[]
    constructor(){
        this.items = [];
    }
    push(item:any){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0; 
    }
    clear(){
        this.items = []
    }
    size():number{
        return this.items.length
    }
    toString(){
        return this.items.toString();
    }
}
