var getUserRepos = function() {
    var response = fetch("https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=1894988d667eb06dee04a4291eb5803d").then(function(response){
response.json().then(function(data){      
   console.log(data)
 });
});
}

getUserRepos();


