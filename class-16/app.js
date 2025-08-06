// var number = Math.round(9.753)
// var number = Math.round(0.0934)

// console.log(number)

// var anyNo = Math.ceil(1.000)
// console.log(anyNo)

// var integer = Math.floor(1.999)
// console.log(integer)

// var randomNo = Math.floor(Math.random()*10)+1
// console.log(randomNo)

// no conversion
// var profit = "200" + 150
// var profit = "200" + "duck";
// console.log(profit)


//  var numberAsNumber = 65;
//  var numberAsString = numberAsNumber.toString();
//  console.log(numberAsString)

// var no = 4.42455
// var totalNo = no.toFixed(2)
// console.log(no)
// console.log(totalNo)



//////////////////////////////////////////

let fullName = "Hussain"

function greet(){
    let fullName = "Hussain Ahmed"
    console.log("Hello " + fullName);
}
greet();
console.log("Hello " + fullName);

greet()

const date = new Date()
const day = date.getDay()
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

switch(days[day]){
    case "Mon":
        console.log("Monday")
        break;
    case "Tue":
        console.log("tuesday")
        break;
    case "Wed":
        console.log("wednesday")
        break;
    case "Thu":
        console.log("thursday")
        break;
    default:
        console.log("Invalid day")
}

function grade(marks){
    if(marks >=90){
        return "A+"
    }
    else if(marks >= 80){
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

console.log("He got :",grade(91))
console.log("He got :",grade(81))
console.log("He got :",grade(71))
console.log("He got :",grade(61))
console.log("He got :",grade(51))
console.log("He got :",grade(41))
console.log("He got :",grade(31))


switch(grade(91)){
    case "A+":
        console.log("Excellent")
        break;
    case "A":
        console.log("Very Good")
        break;
    case "B":
        console.log("Good")
        break;
    case "C":
        console.log("Average")
        break;
    case "D":
        console.log("Below Average")
        break;
    case "Fail":
        console.log("You need to work hard")
        break;
    default:
        console.log("Invalid grade")

}

function addMarks(grade){
    // let marks = +prompt("Enter your percentage ", 80)
    let grades = grade
    console.log("You got :", grades)
    // alert("You got :", grades)
}
addMarks(80)

let isSchoolOpen = true;
console.log(isSchoolOpen? "School is open" : "School is closed")

isSchoolOpen && (console.log("School is open"))


const person = {
    fullName: "Hussain",
    age: 25,
    isStudent: true,
    'campus name': "SMIT",
    class : {
        name : 'Web Devlopment',
        duration : '9 months',

    }
}
console.log(person)
console.log("fullName :",person.fullName)
console.log("campus and name ",person['campus name'])
console.log( "class name ",person.class.name)
console.log(person.age)