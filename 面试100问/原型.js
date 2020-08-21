const Person = function(name){
    this.name = name
    // return 1
    
   
}

Person.prototype.sayName = function(){
    console.log(this.name)
}
const person = new Person('tony')
console.log(person.name)
console.log(person.sayName)
console.log(person instanceof Person)
