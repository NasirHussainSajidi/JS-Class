//               FUNCTION

function  fullName(){
    console.log("Nasir Hussain")
}

fullName()
fullName()
fullName()

function greeting(name){
    console.log(`Hello ${name}`)
}

greeting("Abis Hussain")
greeting("Asim Hussain")
greeting("Nasir Hussain")
greeting("Kashif Hussain")


function add(num1, num2){
    console.log("Inside the function", num1+num2)
    return num1+num2
}

console.log(add(3,4))
console.log(add(8,4))
console.log(add(3,3))
console.log(add(4,4))

function grading(marks){
    if(marks >= 90){
        return "A+"
    }else if(marks >= 80){
        return "A"
    }else if(marks >= 70){
        return "B"
    }else if(marks >= 60){
        return "C"
    }else if(marks >= 50){
        return "D"
    }else {
        return "Fail"
    }
}

console.log("He got :", grading(90))
console.log("He got :", grading(80))
console.log("He got :", grading(70))
console.log("He got :", grading(60))
console.log("He got :", grading(50))
console.log("He got :", grading(40))

function addMarks(){
    let marks = +prompt("Enter your percentage", 80)
    let grade = grading(marks)

    alert("Your Grade is :" + grade)
}

console.log(addMarks())

const firstName = "Nasir"
const lastName = "Hussain"

function getFullName(FirstName, LastName){
    // const fullName = firstName +" " + lastName
    // return fullName
    return FirstName +" "+ LastName
}

console.log(getFullName("Ali", "Ahmed"))


const cities = ["Karachi", "islamabad","lahore", "peshawar"]
const firstNames = prompt("Enter your city", "karachi")
function checkCity(city){
    for(let i=0; i<=cities.length; i++){
        if(firstNames.tolowerCase === cities[i]){
            alert("city Found")
        }else{
            alert("city not found")
        }
    }
}

checkCity(firstName)


//           ANONYMOUS FUNCTION

let greet = function(){
    return "Nasir Hussain"
}

console.log(greet())

//            ARROW FUNCTION

// const fName = function(firName, lasName){
//     return `${firName} ${lasName}`
// }

// const fName = (firName, lasName)=>{
//     return `${firName} ${lasName}`
// }

const fName = (firName, lasName)=> `${firName} ${lasName}`
console.log(fName("Abis", "Hussain"))


console.log(n1)

var a = "ABC"
let n1 = 34  // TEMPORAL DEAD ZONE
