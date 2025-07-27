//  &&

// console.log(true && true && false)

// //  ||

// console.log(true || false || false)

// const value = !!{}
// console.log(value) 

// // Nullish operator (??)
// let user ;
// console.log(user ?? "Guest")

// let users = "Nasir";
// console.log(users ?? "Guest");

let firstNames = null
let lastNames = "ali"
let nickNames = null

console.log(firstNames ?? lastNames ?? nickNames ?? "Guest")



let firstName = null;
let lastName = null;
let nickName = "";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous")



console.log((firstName || lastName || nickName) ?? "nasir")



/// LOOPS

for(let i=1; i<=10; i++){
    console.log("hello", i)
}

const table = 11
for(let i = 1; i<=10; i++){
    console.log(`${table} X ${i} = ${table * i}` )
}