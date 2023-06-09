


let searchbox =document.querySelector(".search input");

let button =document.querySelector('.button');
 let cityinput = document.querySelector(".cityinput");


    
let apikey ="6438a97f4e5d06eca95a5b8243795c66"
const apiurl =(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`);
    console.log(apiurl);
    
    async function  checkWeather (citynames) {

        const response = await fetch (apiurl + citynames + `&appid=${apikey}`)
        let data = await response.json();
        console.log(data)
        document.querySelector(".cityname").innerHTML= "Location:"  + data.name ;
         document.querySelector(".temp").innerHTML= " Temp :" + Math.round(data.main.temp) +"°C";
       document.querySelector(".wind").innerHTML= "Wind Speed :" +data.wind.speed +" km/h";
       document.querySelector('.humidity').innerHTML= "humidity :" +data.main.humidity +"%";

       document.querySelector('.sys').innerHTML ="country:" +data.sys.country;





    }

    
    

function handleSubmit(event){
    event.preventDefault();

    let citynames = cityinput.value;
    checkWeather(citynames);

}
 button.addEventListener('click',handleSubmit);



