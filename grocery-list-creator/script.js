const input = document.querySelector("input")
const createBtn = document.querySelector("button")
const ul = document.querySelector("ul")




createBtn.addEventListener("click", function(){


    

    // button click --> value  store garne --> li create garne --> store gareko value lai li vitra halne --> li lai ul vitra haldine

    // value store 
    const grocery = input.value

    //create li

    const li = document.createElement("li");

    // grocery lai li vitra halxau

    li.textContent = grocery

    // li lai ul vitra halxau

    
    ul.appendChild(li)

    // input box lai khali garne

    input.value = ""






})



// button click --> 


