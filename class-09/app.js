// SLICE

const fruits = ["apple", "banana", "cherry", "mango", "orange"]

const slicedFruits = fruits.slice(1, 4)

// console.log(fruits)
// console.log(slicedFruits)

// SPLICE

// STARTING INDEX
// DELETE COUNNT
// ITEMS 
//  OVERWRITE ORIGINAL ARRAY

const fruit1 = ["mango", "apple", "banana", "cherry", "orange", "kiwi"]
const removedFruits = fruit1.splice(1,4,"grape", "peach")

console.log(fruit1)
console.log(removedFruits)


// LOOP
 
// const table = +prompt("Enter a number", 10)

// for(let i = 1; i<= 10; i++){
    // console.log(`${table} x ${i} = ${table * i}`)
// }

// NESTED LOOP
for(let i = 1; i<= 6; i++){
    let stars = ""
    for(let j= 1; j<=i; j++){
        stars += "*"
    }
    console.log(stars)
}


for(let i = 1; i<=6; i++){
    let stars = ""
    for(let  j= 1; j<=6-i; j++){
        stars += "*"
    }
    console.log(stars)
}

