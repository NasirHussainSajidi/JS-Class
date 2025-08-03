const fullName = "Nasir Hussain"
const modifiedName = fullName.slice(6,13)

console.log(modifiedName)
console.log(fullName)


const message = "yester day was a good day"
console.log(message.indexOf("day"))
console.log(message.lastIndexOf("day"))

console.log(fullName.charAt(0).toUpperCase())


const text = "Nasir"
for(let i = 0; i< text.length; i++){
    if(text.chartAt === "a"){
        console.log("Found 'a' at index :", i)
        break;
    }else{
        console.log("Not Found 'a' at index :")
    }
}


const messages = "Yesterday Pakistan won the match against India"

// const modifiedMessage = messages.replace("Pakistan", "Bangladesh")
const modifieMessage = messages.replace(/pakistan/g, "Bangladesh")

console.log(messages)
console.log(modifieMessage)

const round = 9.99999

console.log("Ceil :", Math.ceil(round))
console.log("Floor :", Math.floor(round))
console.log("Round :", Math.round(round))

for(let i=0; i<=20; i++){
    const random = Math.floor(Math.random() * 10)+1;
    console.log(i,": Random Number :", random)
}

const num = "9.999999999999"

console.log("ParseInt", parseInt(num))
console.log("ParseFloat", parseFloat(num))

console.log(+num)
console.log(Number(num))