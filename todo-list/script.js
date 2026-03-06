

// // // add - >   new task create 

// // // select garne elements ( input , button , parent(div) )

// // // event listener lagauxau button ma 

// // // input ko value lai store garxau 

// // // new element create garxau (div)

// // // new element vitra input ko value lai halxau 

// // // input lai khali garxau



// // const todos = []

// // const input = document.querySelector("input")
// // const addBtn = document.querySelector(".add-btn")
// // const todoContainer = document.querySelector(".todo-wrapper")

// // function  renderTodo(){
// // todoContainer.innerHTML = ""

// //     todos.forEach((value )=>{

// //     todoContainer.innerHTML += `

    
// //             <div class="todo-item">

// //                <h1>${value.title}</h1>

// //                <div class="btn-container">
                
// //                <button class="delete">X</button>
// //                <button class="completed">C</button>

// //                </div>

// //             </div>
    
// //     `


// // })
// // }


// // function addTodo (){

// //     const inputValue = input.value;

// //    const todoObj = {
// //     title : inputValue
// //    }

// //    todos.push(todoObj)

// //    console.log(todos)


// // renderTodo()








// // }

// // addBtn.addEventListener("click",addTodo)






// // BUTTON CLICK 
// // DATA STORE = [{} , {}, {}, {}]
// // Render garne data lai  todo container ma  


// const addBtn = document.querySelector(".add-btn");
// let input = document.querySelector(".input")
// let todoContainer = document.querySelector(".todo-task-container")


// let todos = []
//   // array to store todos

 
// addBtn.addEventListener("click", function(){

//     //data nikalxau
//     let inputValue = input.value

//     // value ko use garera obj banaune 

//     let todoObj = {
//         title : inputValue,  
//     }

//     //object lai array ma push gardine

//     todos.push(todoObj)
  
//    // array ma loop lagaera data ui ma dekhauxau
   
//  todoContainer.innerHTML = ""
//    todos.forEach((todo)=>{
//     console.log(todo)
    
//     todoContainer.innerHTML += `<h1>${todo.title}</h1>`

//    })
// console.log(todos)
//    input.value = ""
   

    
    








// })




const button = document.querySelector(".add-btn")
const input = document.querySelector(".input")
let todoItemContainer = document.querySelector(".todo-task-container")

let totalTodoContainer = document.querySelector(".total-todo")


let todos = []



    button.addEventListener("click", ()=>{
        
        const inputValue = input.value

        const todoObj = {
            title : inputValue
        }

        // array ko value change gareko 
        todos.push(todoObj)
        

        todoItemContainer.innerHTML = ""

        // array ko value dekhako 
    todos.forEach((todo , index)=>{

        
            todoItemContainer.innerHTML += ` <h1>${todo.title}</h1> 
           
            `
            
         
        

        })

        totalTodoContainer.innerHTML = `Total todo ${todos.length}`
        

        input.value = ""

    })






// array 1st state = []

// eat food  
// button click 1 =  [{eat food}]
// todo container = eat food

// play game 
//button click 2 = [{eat food}, {play game}]
// todo container = eat food  , eat food , playgame


// drink water
// button click 3 = [{eat food}, {play game} , {drink water}]
// todo container = eat food , eat food , play game , eat food , playgame , drink water



// array change 



// ui change 




// 1 --> []
// 2 --> button click --> obj form --> [{eat food}] --> todoContainer (khali hunx) --> array ma loop lagera value dekhixa 

// 3 --> button click --> obj form --< [{eat food} , {play game}] --> todoContainer (khali hunxa) --> array ma feri loop lagera vlaue dekhinxa


