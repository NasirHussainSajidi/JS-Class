//!             FOR LOOP

for(let i = 1; i<= 10; i++){
    console.log("The number is : " + i)
}

//!            WHILE LOOP

let j = 1;
while(j<= 10){
    console.log("The number of While loop is :" + j)
    j++
}

//!            DO WHILE LOOP

let k = 10 
do{
    console.log("The number of Do While loop is : " + k)
}while(k < 10);

//!            FUNCTION

function greet(){
    console.log("Hello, hope you are doing well!")
}
greet()

const person = {
    fullName: "Nasir Hussain",
    age: 25,
    city: "Karachi",
    greet : ()=>{
        console.log("Hello This is an arrow function")
    }
}
person.greet()

//!           ARROW FUNCTION

const by = (name) => {
    if(name === "Nasir"){
        return `Imposterr name is ${name}`
    }
    return `Hello ${name}`
}
console.log(by("Nasir"))
console.log(by("kashif"))
console.log(by("asim"))
console.log(by("abis"))



function cool(){
    console.log("Helo, hope you are doing well!")
}
function cooldown(){
    console.log("By, you are exprence is good!")
}