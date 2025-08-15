// const box = document.getElementsByClassName('box')

// function increaseBoxSize(){
//     box.style.width = '550px'
//     box.style.height = '550px'
//     box.style.backgroundColor = 'red'
//     box.style.color = 'white'
//     box.style.fontSize = '30px'
//     console.log('Mouse is over the box')
//     box.style.cursor = 'pointer'
// }
// increaseBoxSize()

// function originalSize(){
//     console.log('Mouse is out of the box')
//     box.style.width = '400px'
//     box.style.height = '400px'
//     box.style.backgroundColor = 'pink'
//     box.style.color = 'black'
//     box.style.fontSize = '20px'
// }

// alert('Hello, this is a simple JavaScript class example!')
const fruit = ['apple', 'banana', 'orange', 'grape', 'kiwi']
for (let i = 0 ; i < fruit.length; i++){
    console.log(i, fruit[i])
}

for (let i = 0; i < fruit.length; i++){
    if(fruit[i] === 'grape'){
        console.log('Found banana at index:', i)
        break;
    }
}

for (let i = 0; i<= 5; i++){
    if(i === 3){
        console.log('Skipping number 3')
        break;
    }
}

