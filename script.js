var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-pick");

var formSubmitHandler = function(event){
  event.preventDefault();
  console.log(event);
};

var getUserRepos = function() {
    var response = fetch("https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=1894988d667eb06dee04a4291eb5803d").then(function(response){
response.json().then(function(data){      
   console.log(data)
 });
});
}

userFormEl.addEventListener("submit", formSubmitHandler);
//getUserRepos();
//info that we want for assignment 
// search by city
//current and future weather conditions
//saved searches
//temp wind humidiity

//API TAGS TO USE MAIN - NAME
