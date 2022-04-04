var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name");
var forecastContainerEl = document.querySelector("rows");


var formSubmitHandler = function(event){
  event.preventDefault();
  //get value from input element 
  var city = cityInputEl.value.trim();


  if (city) {
    getCityWeather(city);
    getWeek(city);
    cityInputEl.value = "";
  } else {
    alert("Please enter an actual city");
  }
  console.log(event);

};

var getCityWeather = function(city) {
  
  //var apiKey = "7a25e0075bdfe4c9341cb0fb5b0fe9b3"
  var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${7a25e0075bdfe4c9341cb0fb5b0fe9b3}'
  

    fetch(apiURL)
    .then(function(response){
response.json().then(function(data){      
   console.log(data, city)
 });
});
}

var getWeek = function(city) {

  var apiKey = "7a25e0075bdfe4c9341cb0fb5b0fe9b3"
  var apiKey = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${7a25e0075bdfe4c9341cb0fb5b0fe9b3}"

  fetch(apiURL)
  .then(function(response){
    response.json().then(function(data){
      displayWeek(data);
    });
  });
};

var displayWeek = function(weather) {
  forecastContainerEl.textContent = ""
  forecastTitle.textContent = "Weeks Forecast:";

  var forecast = weather.list;
  for(var i=5; i < forecast.length; i=i+8){
    var dailyForecast = forecast[i];
  }
}

userFormEl.addEventListener("submit", formSubmitHandler);
//getUserRepos();
//info that we want for assignment 
// search by city
//current and future weather conditions
//saved searches
//temp wind humidiity

//API TAGS TO USE MAIN - NAME
