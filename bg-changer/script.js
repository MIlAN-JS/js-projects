/*

button click --> bg cchange 


1 - button lai select garxau lyauxau 
2 - bg lai select garxau 
3 -> click vako xa ki xaina vanera sunxau
4 -> click vako xa vane colur change grxau 


*/


function colorGenerator(){

    const red =  Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)


    let color = `rgb(${red} , ${green} , ${blue})`

    return color
    


    // const colorCode =rgb(255 , 99 , 71)  ; 
}


// html element lai select gareko 
const background = document.querySelector(".background")
const button  = document.querySelector(".change-btn")

//style change
background.style.backgroundColor = "green"




// button click vako xa ki xaina kasari tha paune

button.addEventListener("click", function(){
    let color = colorGenerator()
    background.style.backgroundColor = color;
    
})



//background select
//button select
//changing style using js
//checking eithter button is clicked or not
// created afunction which generates color and returns the color
// changing bg color after clicking button


