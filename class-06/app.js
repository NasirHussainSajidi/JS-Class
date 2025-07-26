//   IF STATEMENT

// if(true){
//     console.log("This is true");
// }

const age = prompt("Enter your age", 18);
//  if(age >= 18){
//     console.log("You are an adult");
//  }
//  else{
//     console.log("You are a minor");
//  }

 const cnic = confirm("Do you have a CNIC?");
//     if(cnic === true){
//         const age1 = prompt("Enter your age", 18);
//         if(age1 >= 18){
//             console.log("You can vote");
//         }
//         else{
//             console.log("You cannot vote");
//         }
//     }

    //    && or || operators


console.log(true && false && true && true && true && true && true)

console.log(false || true || false || false || true || false )


if(age >= 18 && cnic === true){
    alert("You are eligible gor gun license")
}
else{
    alert("You are not eligible for gun license")
}


 ////////  Falsy values
//    false
//    `0`,`-0
//    `on` (BigInt zero)
//    `""` (empty string)
//     `null`
//     `undefined`
//     `NaN` (Not a Number)


////// Truthy values
//     `true`
//     `1`, `-1` (any non-zero number)
// - Any object (e.g., `{}`, `[]`)  
// - Any function (e.g., `function() {}`)  
// - `Infinity`, `-Infinity`  
// - Any non-zero BigInt (e.g., `1n`, `-1n`)


if(`false`){
    console.log("This is true");
}


const result = {} ? "HI" : "By!"

console.log(result)




const GunLicenseRequiredAge = prompt("Enter your age", 18);


const condition = confirmCnic === true && GunLicenseRequiredAge >= 18


//CONDITIONAL OPERATOR (? | :)

const result1 = condition ?  alert("You are eligible for Gun License") :   alert("You are not eligible for Gun License")

if (condition) {
    alert("You are eligible for Gun License");
} else {
    alert("You are not eligible for Gun License");
}



let agees = prompt('age?', 18);

let message = (age < 3) ? 'Hello Boy!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );