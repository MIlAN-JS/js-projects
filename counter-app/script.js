const screen   = document.querySelector(".screen")
const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const addFiveBtn = document.querySelector(".addFive")
const minusFiveBtn = document.querySelector(".minusFive")

const resetBtn= document.querySelector(".reset")


let counter = 0 ; 


increaseBtn.addEventListener("click" , function(){

    if(counter < 20){
        counter++
        screen.textContent = counter
    }else{
        window.alert("value is   20")
    }

    

})
decreaseBtn.addEventListener("click" , function(){

    if(counter > 0){
        counter--
        screen.textContent = counter
    }else{
        window.alert("cannot decrease counter")
    }

    

})


resetBtn.addEventListener("click"  , function(){

    if(counter > 15){
        
    counter = 0 ;
    screen.textContent = counter
    }else{
        window.alert("value is less than 15")
    }

})

addFiveBtn.addEventListener("click"  , function(){

    counter = counter+ 5
    screen.textContent = counter

})

minusFiveBtn.addEventListener("click"  , function(){

    counter = counter- 5
    screen.textContent = counter

})






