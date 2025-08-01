
function greeting(){
    return "Hi !"
}
console.log(greeting())


let value;

function add(){
    return 2+2
}
console.log(add())


let addValue = add()
console.log(addValue)
console.log(value)


function greetings(name){
    console.log("HELLO :"+name)
}
greetings("Ali")
greetings("Hassan")
greetings("Hussain")
greetings("Ahmed")
greetings("Muhammad")
greetings("Kashif")


                           //!PARAMETER

function add(num1, num2){
    return num1+num2
}
console.log(add(3))

                           // ARGUMENT


function subtract(n1, n2){
    return n1-n2
}
console.log(subtract(10, 15))