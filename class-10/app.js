// ELSE IF

const a = true;

if(a){

    console.log("Hello !")
}
else{
    console.log("Goodbye !")
}

// GRADING SYSTEM
const persentage = +prompt("Enter your persentage :", 50)

if(persentage >= 80 && persentage <= 100){
    console.log("You got A+")
}else if(persentage >= 70 && persentage < 80 ){
    console.log("You got A")
}else if(persentage >= 60 && persentage < 70){
    console.log("You got B")
}else if (persentage >= 50 && persentage < 60){
    console.log("You got c")
}else{
    console.log("You are failed")
}

const input = +prompt("Enter a number : ", 10)

if(input % 3 === 0 && input % 5 === 0){
    alert("FIZZ BUZZ !!")
}else if(input % 3 === 0){
    alert("FIZZ !!")
}else if(input % 5 === 0){
    alert("BUZZ !!")
}else{
    alert("Not Fizz or Bizz !! Please enter a number that is divisible by 3 or 5.")
}


const hour = new Date().getHours()

if(hour < 12){
    console.log("Good Morning !")
}else if(hour < 18) {
    console.log("Good Afternoon !")
}else(
    console.log("Good Evening !")
)