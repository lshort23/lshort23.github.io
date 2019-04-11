let weatherRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=92660&units=imperial&APPID=42ad6f966f5df0f08d1f672debefa31e';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById('temp').innerHTML = weatherData.main.temp;
document.getElementById('current').innerHTML = weatherData.main.temp;
document.getElementById('humid').innerHTML = weatherData.main.humidity;
}