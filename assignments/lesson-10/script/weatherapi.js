let weatherRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=42ad6f966f5df0f08d1f672debefa31e';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementbyId('temp').innerHTML = weatherData.main.temp;
}