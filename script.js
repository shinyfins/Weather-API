var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name");
var forecastContainerEl = document.querySelector("rows");
var apiKey = "7a25e0075bdfe4c9341cb0fb5b0fe9b3"
var tempEl = document.querySelector("#temp");
var nameEl = document.querySelector(".cityName");

var getCityWeather = function(city) {
  
  var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  

    fetch(apiURL)
    .then(function(response){
response.json().then(function(data){      
   console.log(data)
   console.log(data.main.temp);
   nameEl.textContent = data.name;
   tempEl.textContent = data.main.temp;
   //getWeek(city);
 });
});
}

var getWeek = function(city) {


  var weekapiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  fetch(weekapiUrl)
  .then(function(response){
    response.json().then(function(data){
      displayWeek(data);
      console.log ("gello");
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

var formSubmitHandler = function(event){
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
