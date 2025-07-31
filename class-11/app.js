// FOR LOOP

// for(let i=0; i <5; i++){
//     console.log(i)
// }

const fruits = ['apple', 'banana', 'cherry', 'date'];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let i=0; i<fruits.length; i++){
//     if(fruits[i] === 'cherry'){
//         console.log("found cherry at index" + i)
//         break;
//     }else{
//         console.log(fruits[i])
//         // console.log("not found cherry at index" + i)
//     }
// }

// for(let i=0; i<10; i++){
//     if(i === 5){
//         console.log("found 5, skipping to next iteration")
//         continue;
//     }
//     console.log(i)
// }

// WHILE LOOP
// let i = 0;
// while(i<5){
//     console.log(i)
//     i++
// }

// let j = 0;
// while(false){
//     console.log(j)
//     j++
// }

let foundShabana = ["Islamabad","skardu", "Karachi", "Lahore", "Peshawar"];
let city = "Karachi";

let k = 0;
while(k<foundShabana.length){
    if(city == foundShabana[k]){
        console.log("found shabana at index " + k)
        break;
    }else{
        console.log(foundShabana[k])
    }
    k++;
}

// DO WHILE LOOP
let num = 16
do{
    console.log(num)
    num++;
}while(num<10);


function abc(){
    console.log("Hello from abc function")
}

abc()