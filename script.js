"use strict";
async function getData(city) {
    const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=04c8beabeded4281662ceda5a1cce41c&units=metric");
    const data = await res.json();
  
    const heading =document.getElementById("heading");
  console.log(data);
    let cityName= (data.name);
  let cityTemperature=(data.main.temp)
  heading.innerHTML ="Currently "+ cityTemperature + " ℃ in " + cityName;

  let lowestTemperature= (data.main.temp_min);
  let highestTemperature=(data.main.temp_max);

  subheading2.innerHTML ="min " + lowestTemperature + " ℃ / " + "max " +highestTemperature + " ℃";
   
    //document.body.append(img);
  }


   //new city submit from
let changeCityForm = document.getElementById("changeCityForm");
changeCityForm.onsubmit = function (event) {
  event.preventDefault();
  console.log(changeCityForm.elements.changeCity.value);
  let newCity = changeCityForm.elements.changeCity.value;
  getData(newCity);
  changeCityForm.elements.changeCity.value="";
};


  getData("London");
  //event listener, button id, function ``get data''
  //"getQuote" --> getData
  //btn.addEventListener("click", getQuote);

  //create a textbox next to 'change city ' button
  //documentation of API https://openweathermap.org/current