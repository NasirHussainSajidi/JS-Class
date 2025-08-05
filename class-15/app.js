const anyNumber = 9
console.log(("ToFixed:", anyNumber.toFixed(2)))// Output: ToFixed: 9.00

const date = new Date()

const minute = date.getMinutes()
const hour = date.getHours()
const seconds = date.getSeconds()
console.log(`fix time is ${hour}:${minute}:${seconds}`) // 

//       GET WEEK DAY

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const shortDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
console.log(shortDay[date.getDay()])

//           GET DATE

const currentDate = date.getDate()
console.log(`Current Date is : ${currentDate}`) // Current Date is 1

//          GET FuLL YEAR
const getYear = date.getFullYear()

console.log(`Current Year is : ${getYear}`) 

//         GET HOURS
console.log(`Current Hour is : ${hour}`)


//         GET MINUTES

console.log(`current minute is :${minute}`)

//         GET SECONDS

console.log(`Current seconds is : ${seconds}`)


//         GET MILLISECONDS
const milliSecond = date.getMilliseconds()
console.log(`Current Milliseconds is : ${milliSecond}`)

for(let i=1; i<=1000; i++){
    console.log(i,":",date.getMilliseconds())
}

const time = date.getTime()
console.log(time)

console.log(time/(1000*60*60*24*365.25))

const doomDay = new Date("2024-04-01")

const dmTime = doomDay.getTime()
const currentTime = date.getTime()

console.log("dmTime: ", dmTime)
console.log("currentTime :", currentTime)

const diffTime = doomDay - currentDate
console.log(diffTime/(1000*60*60*24))

date.setHours(12)
date.setMonth(0)
date.setDate(25)

console.log(date.getHours)
console.log(date.getMonth)
console.log(date.getDate)


function tellTime(){
    const date = new Date()

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const mSeconds = date.getMilliseconds()


    alert(`Your current Hour is ${hour} & minute is ${minutes}, seconds is ${seconds}, millisecond is ${mSeconds}`)
}