"use strict"

const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather__loading">
    <img src="./images/giphy.gif" alt="Loading...">
    </div>`;

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=38.195150&lon=26.834402&appid=410cd0d19969ea92eb35e7ca8f8b8f95';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responceResult.message;
    }
}

function getWeather(data) {

const location = data.name;
const temp = Math.round(data.main.temp);
const feelslike = Math.round(data.main.feels_like);
const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const vindSpeed = data.wind.speed;

    console.log(data);

    const template = ` 
    <div class="weather__header">
    <div class="weather__main">
    <div class="weather__city">${location}</div>
    <div class="weather__status">${weatherStatus}</div>
    </div>
    <div class="weather__icon">
    <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}$">
        </div>
        </div>
        <div class="weather__temp">Температура:${temp}</div>
        <div class="weather__feels-like">Ощущается: ${feelslike}</div>
        <div class="weather__vind">Скорость ветра м/с: ${vindSpeed}</div>`;
    
    
    weatherBlock.innerHTML = template;
}
    
if (weatherBlock) {
    loadWeather();
}