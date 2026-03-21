// user city name  line
// city name use garera api call garne 


let input = document.querySelector(".input")
let search = document.querySelector(".search")
let temperature = document.querySelector(".temperature")
let cityName = document.querySelector(".city-name")
let windValue = document.querySelector(".wind-value")
let humidity = document.querySelector(".humidity-value")
let realFeel = document.querySelector(".feels_like")
let pressure = document.querySelector(".pressure")
let sunrise = document.querySelector(".sunrise")
let sunset = document.querySelector(".sunset")
let date = document.querySelector(".date")
let day = document.querySelector(".day")
let time = document.querySelector(".time")
let weatherIcon = document.querySelector(".time")

async function getWeatherData(city){

    
const apiKey = "47f359673cd1ff3761148b2c21ecae26"


    
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

const finalData = await response.json()
return finalData

}


          
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let icons = {

  clear: "☀️",
  sunny: "☀️",
  clouds: "☁️",
  rain: "🌧️",
  drizzle: "🌦️",
  thunderstorm: "⛈️",
  snow: "❄️",
  mist: "🌫️",
  smoke: "🌫️",
  haze: "🌫️",
  dust: "🌪️",
  fog: "🌫️",
  sand: "🏜️",
  ash: "🌋",
  squall: "💨",
  tornado: "🌪️",

  hot: "🔥",
  cold: "🥶",
  normal: "🙂", 
  veryHot : "☠️"

}

search.addEventListener("click", async (e)=>{
    let city = input.value
   const finalData =  await getWeatherData(city)
console.log(finalData)
    
   temperature.textContent = finalData.main.temp + "°C"
   cityName.textContent = finalData.name
   windValue.textContent = finalData.wind.speed
   humidity.textContent = finalData.main.humidity + "%"
   realFeel.textContent = finalData.main.feels_like + "°C"
   pressure.textContent= finalData.main.pressure + "mb"


let sunriseTime = new Date(finalData.sys.sunrise * 1000).toLocaleTimeString()
let sunsetTime = new Date(finalData.sys.sunset * 1000).toLocaleTimeString()

sunrise.textContent = sunriseTime
sunset.textContent = sunsetTime

let now = new Date()

let timeVal = now.toLocaleTimeString()
let dateVal = now.toLocaleDateString()
let dayVal= days[now.getDay()]

date.textContent = dateVal
day.textContent = dayVal
time.textContent = timeVal


if(finalData.main.temp <= 0){
    weatherIcon.textContent = icons.snow
}
else if (finalData.main.temp >0 && finalData.main.temp<=10){
     weatherIcon.textContent = icons.cold
}
else if (finalData.main.temp >=11 && finalData.main.temp<=20){
     weatherIcon.textContent = icons.normal
}
else if (finalData.main.temp >=31 && finalData.main.temp<=40){
     weatherIcon.textContent = icons.hot
}else {
    weatherIcon.textContent = icons.very
}





input.value = ""




})

// 3 state  
// dhole lai sekuwa khwaune --

// state 1 : dhole lai sekuwa khwaisakeu  -> fulfilled
// state 2 : dhole lai sekuwa khuwaunai baki xa -> pending
// state 3 : dhole lai sekuna nakhuwahe -> rejected


// JSON = JS OBJECT NOTAION 


// String
// OBJECT 

