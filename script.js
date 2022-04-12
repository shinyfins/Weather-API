var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name");
var forecastContainerEl = document.querySelector("rows");
var apiKey = "7a25e0075bdfe4c9341cb0fb5b0fe9b3"
var tempEl = document.querySelector("#temp");
var nameEl = document.querySelector(".cityName");
var windEl = document.querySelector("#wind-speed");
var imgEl = document.querySelector("#icon");
var humidEl = document.querySelector("#humidity");
var pastSearchesButtonEl = document.querySelector("slctcity");
//var dateString = moment.unix(1649209170).format("MM/DD/YYYY");


var getCityWeather = function (city) {

  var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


  fetch(apiURL)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      console.log(data.main.temp);
      var dateString = moment.unix(data.dt).format("MM/DD/YYYY");
      nameEl.textContent = data.name + " " + dateString;
      tempEl.textContent = data.main.temp;
      var iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      imgEl.classList.remove("hide");
      imgEl.src = iconUrl;
      windEl.textContent = "Wind Speed- " + data.wind.speed;
      humidEl.textContent = "Humidity- " + data.main.humidity;
      getWeek(city);
      pastSearch(city);
      console.log()
    });
}

var getWeek = function (city) {


  var weekapiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  fetch(weekapiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        displayWeek(data);
        console.log("gello");
      });
    });
};

var displayWeek = function (weather) {
  forecastContainerEl.textContent = ""
  forecastTitle.textContent = "Weeks Forecast:";

  var forecast = weather.list;
  for (var i = 5; i < forecast.length; i = i + 8) {
    var dailyForecast = forecast[i];

    
  }
}

var pastSearch = function(pastSearch){

}

var formSubmitHandler = function (event) {
  event.preventDefault();
  //get value from input element 
  var city = cityInputEl.value.trim();


  if (city) {
    getCityWeather(city);
    // getWeek(city);
    cityInputEl.value = "";
  } else {
    alert("Please enter an actual city");
  }
  //console.log(event);

};
userFormEl.addEventListener("submit", formSubmitHandler);
//getUserRepos();
//info that we want for assignment 
// search by city
//current and future weather conditions
//saved searches
//temp wind humidiity

//API TAGS TO USE MAIN - NAME
