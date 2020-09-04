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
var arr = [];
function popstack(arr1) {
    if (arr1 == null) {
        return null;
    }
}
var stack = (function () {
    function stack() {
        this.items = [];
    }
    stack.prototype.push = function (item) {
        this.items.push(item);
    };
    stack.prototype.pop = function () {
        return this.items.pop();
    };
    stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    stack.prototype.clear = function () {
        this.items = [];
    };
    stack.prototype.size = function () {
        return this.items.length;
    };
    stack.prototype.toString = function () {
        return this.items.toString();
    };
    return stack;
})();
exports["default"] = stack;
