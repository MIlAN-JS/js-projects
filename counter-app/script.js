const screen   = document.querySelector(".screen")
const increaseBtn = document.querySelector(".increase")

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


resetBtn.addEventListener("click"  , function(){

    if(counter > 15){
        
    counter = 0 ;
    screen.textContent = counter
    }else{
        window.alert("value is less than 15")
    }

})




