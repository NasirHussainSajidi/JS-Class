let person = [23, false, "ali", "ahmed ", "nasir ", "Hussain"]


for (let i = 0; i<=person.length-1; i++){
    console.log("index no :",i, person[i],)
}


let student = {
    fullName: "Nasir Hussain",
    age: 23,
    isStudent: true
}
console.log(student.fullName)
console.log(student.age)


const fruit = ["Mango", "Banana", "Apple", "Orange", "Grapes"];
for(let i=0; i<fruit.length; i++){
    console.log(fruit[i])

}


// Add Value in Last !
fruit.push("pineapple", "kiwi");

console.log("Afte adding a new fruit:", fruit)

// Remove last Value !
fruit.pop()
console.log("After removing the last fruit:", fruit)


// Remove first Value !
fruit.shift()
console.log("After removing another fruit:", fruit)

fruit.shift()
console.log("After removing another fruit:", fruit)


// Add Value in First !
fruit.unshift("Strawberry", "Peach");
console.log("After adding new fruits at the beginning:", fruit)

for (let i = 0; i<=fruit.length-1; i++){
    console.log(`index no : ${i} : ${fruit[i]}`)
    if(fruit[i] === "Grapes"){
        console.log("Grapes found at index:", i, "sub khana ka lya ajaw jaldi warna khatam hojayanga")
    }
}

for(let y = 1; y<=50; y++){
    console.log(y, "sorry mam !")
}