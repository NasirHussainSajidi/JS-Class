const paragraph = document.getElementsByClassName('para')

console.log(paragraph)

paragraph[0].style.backgroundColor = 'red'
// paragraph[1].style.backgroundColor = 'green'
// paragraph[2].style.backgroundColor = 'blue'

const elementByTagName = document.getElementsByTagName('p')

elementByTagName[2].style.backgroundColor='lightgreen'

const elementById = document.getElementById('contant-2')

elementById.style.backgroundColor = 'orange'
elementById.style.fontSize = 'large'

// const headingElement = document.querySelector('#contant-3')
// const headingElement = document.querySelector('.contant-3')
// const headingElement = document.querySelector('p')

// const element = document.querySelectorAll('#contant-1')

// const element = document.querySelectorAll('.para')

const element = document.querySelectorAll('p')
console.log(element)

for(let i=0; i<element.length; i++){
    element[i].style.backgroundColor='light'
    console.log(element[i])
}
