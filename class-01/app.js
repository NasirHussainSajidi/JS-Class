// console.log use to print any message
console.log("Hello World")

// alert use to show any message in a popup
// alert("Hello World")

// Global variables 

var  name = "Ali Hussain"
console.log(name)

var name = "Ali Raza" // we can change the value of var variable
console.log(name)
// var is a global variable , we can use it anywhere in the code. in var data types we declare same varianle name again and again but overwrite the value of first variable

// Local Variables

let age = 20
console.log(age)
// let is a local variable, we can use it only in the block where it is declared
age = 21 // we can change the value of let variables but we cannot declare the same variable name again in the same block
console.log(age)


const city = "Karachi" // const is a constant variable, we cannot change the value of const variable once it is declared . const variable is also a local variable, we can use it only in the block where it is declared
// const variable cannot be changed, if we try to change the value of const variable it will give an error
console.log(city)
