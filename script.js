var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name");
var forecastContainerEl = document.querySelector("rows");
var apiKey = "7a25e0075bdfe4c9341cb0fb5b0fe9b3"
var tempEl = document.querySelector("#temp");
var nameEl = document.querySelector(".cityName");
var windEl = document.querySelector("#wind-speed");
var imgEl = document.querySelector("#icon");
var humidEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv-index");
var outLook = document.querySelector("#fiveDay");
var arraySearches = []
var recentEl = document.querySelector("#recentSearch");

//var dateString = moment.unix(1649209170).format("MM/DD/YYYY");


var getCityWeather = function (city) {

  var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


  fetch(apiURL)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      pastSearch(data.name);
      
      var dateString = moment.unix(data.dt).format("MM/DD/YYYY");
      nameEl.textContent = data.name + " " + dateString;
      tempEl.textContent = data.main.temp;
      var iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      imgEl.classList.remove("hide");
      imgEl.src = iconUrl;
      windEl.textContent = "Wind Speed- " + data.wind.speed;
      humidEl.textContent = "Humidity- " + data.main.humidity;

      getWeek(data.coord.lat, data.coord.lon);
      
    });
}

var getWeek = function (lat,lon) {
  var weekapiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`

  fetch(weekapiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        //displayWeek(data);
        console.log(data);
        uvEl.textContent = "UVI- " + data.current.uvi;
        for (var i = 1; i < 6; i++) {
          var date = moment.unix(data.daily[i].dt).format("MM/DD/YYYY");
          var iconUrl = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`
          var divDate = document.createElement("div")
          var datePEl = document.createElement("p")

          var imgEl = document.createElement("img");
          datePEl.textContent = date
          divDate.appendChild(datePEl);
          imgEl.src = iconUrl
          divDate.appendChild(imgEl);
          

          var tempEl = document.createElement("p")
          tempEl.textContent = "Temp: " + data.daily[i].temp.day
          divDate.appendChild(tempEl);
          
          var windEl = document.createElement("p")
          windEl.textContent = "Wind Speed: " + data.daily[i].wind_speed
          divDate.appendChild(windEl);

          var humidEl = document.createElement("p")
          humidEl.textContent = "Humidity: " + data.daily[i].humidity
          divDate.appendChild(humidEl);

          console.log(data.daily[i].humidity);

          outLook.appendChild(divDate);
          
          

        }
      });
    });
};



var pastSearch = function(cityName){
  var buttonEl = document.createElement("button")
  buttonEl.textContent = cityName;
  buttonEl.classList.add("slctcity")
  recentEl.appendChild(buttonEl);
  arraySearches.push(cityName);
  console.log(arraySearches);
  localStorage.setItem("recentSearches",JSON.stringify(arraySearches) )
}

var formSubmitHandler = function (event) {
  event.preventDefault();
  //get value from input element 
  var city = cityInputEl.value.trim();


  if (city) {
    getCityWeather(city);
   // pastSearch(city);
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
