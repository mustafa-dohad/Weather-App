const apiKey = "64099e5ca809eaeabb8a47dae1290a13";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=karachi";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather();