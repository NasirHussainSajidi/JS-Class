// NESTED LOOP
// let star = ''
// for(let i = 1; i<= 5; i++){
//     for(let y = i; y<=i; y++){
//         star += '*'
//         console.log(star)
//     }
//     // console.log("*x", i)
// }

let rows = '';
for(let i = 1; i<=4; i++){
    for(let k = 1; k<=i; k++){
        rows += '*'
        console.log(rows)
    }
}

function randomColor(){
    let color = '#'
    let letters = '0123456789ABCDEF';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    const heading = document.getElementsByTagName('button')[0]

    heading.style.backgroundColor = randomColor()
    heading.style.color = randomColor()
}
