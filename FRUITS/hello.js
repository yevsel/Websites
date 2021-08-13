a={'name':'Selasi','age':22}
// console.log(a['name'])
function greet(val){
    return `Good Morning ${val}`
}
function hello(name,age){
    console.log('Hello')
    console.log('Hello')
    console.log('Hello')
    return {
        name:name,
        age:age,
        greet:greet}
}


b=hello('Yevoo',100)
console.log(b.greet(b.age))

class Morning{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`Good Morning ${this.name}`)
    }
}

c= new Morning('Elizabeth',100)
console.log(c)
