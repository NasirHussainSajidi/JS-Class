const idCont = 1

function addTodo(){
    const inputText = document.getElementById('inputText')
    const btn = document.getElementById('btn')
    const  addTodItem = document.getElementById('addTodoItem')
    const newItem = document.createElement('div')
    newItem.setAttribute('class', 'addItem')
    newItem.setAttribute('id', `${idCont}`)
    newItem.innerHTML += `<p id="para">${inputText.value}</p>
    <button class="btn" onclick="Delete()">Delete</button>
    <button class="btn">edit</button>`
    addTodItem.appendChild(newItem)
    inputText.value = ""
    idCont ++
}

function Delete(id){
    const newItem = document.getElementById(id)
    newItem.remove()
}


// const button = document.getElementById('btn')

// const todoItem = document.getElementById('todo-list')

// function addToDo(){
//     const inputElement = document.getElementById('inputText')
//     const todoItem = document.getElementById('todo-list')
    
//     const todoList = document.createElement('li')
//     todoItem.innerText = inputElement.value
//     todoList.innerHTML += `<li>${inputElement.value }</li>`
//     todoItem.appendChild(todoList)

//     inputElement.vlaue = ""

// }