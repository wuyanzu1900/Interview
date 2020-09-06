import Stack from '../lib/Stack'

const decimalToBinary = function(decNumber) {
    const stack = new Stack()
    let number = decNumber;
    let rem; //余数
    let binaryString = "";
    while(number > 0) {
        rem = Math.floor(number % 2);//5%2 1
        stack.push(rem);
        number = Math.floor(number/2);//5/2 2.5
    }
    while(!stack.isEmpty()){
        binaryString += stack.pop().toString()
    }
    return binaryString

}
console.log(decimalToBinary(5));
// find实现
// 性能问题