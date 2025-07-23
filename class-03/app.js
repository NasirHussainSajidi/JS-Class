// alert("Hello world!")

// const age = Number(prompt("Enter your age", 100));
// console.log(age === 18)

// let isBoss = confirm("Are you the boss?")
// if (isBoss){
//     alert("Welcome, Boss!")
// }
// else {
//     alert("Hello, Guest!")
// }


let value = "22"

if (typeof value === "string"){
    console.log("Succesfully converted to Number ", Number(value))
}

console.log("50" / "25")

// Give some example of regarding BODMAS rule

console.log(2 + 3 * 4) // 14
console.log((2 + 3) * 4) // 20
console.log(2 + 3 * 4 - 5) // 9


const num = (2 + 3) * 4 - 5;
 //   5 * 4 -5
 //  20 - 5
 // 15
console.log(num)



const calculate =   5 + 6 / (2 * 2) - 9 + 2 * 7 / (9 / 3) * 6

//                  5 + 6 / 4 - 9 + 2 * 7 / 3 * 6
//                  5 + 1.5 - 9 + 2 * 2.3 * 6
//                  5 + 1.5 - 9 + 27.6
//                  6.5 - 9 + 27.6
//                  -2.5 + 27.6
//                  25.1

console.log(calculate) // 25.1


const exponentiation = 2 ** 3; // 2 raised to the power of 3
          // 2 * 2 * 2
console.log(exponentiation)

let firstName = "Nasir "
let lastName = "Hussain"

let fullName = `${firstName} ${lastName}`

console.log(fullName)