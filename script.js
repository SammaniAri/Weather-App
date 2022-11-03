"use strict";
async function getData() {
    const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=04c8beabeded4281662ceda5a1cce41c");
    const data = await res.json();
  
    const heading =document.getElementById("heading");
  console.log(data);
    let cityName= (data.name);
  let cityTemperature=(data.main.temp)
  heading.innerHTML ="Currently "+ cityTemperature + " in " + cityName;
   
    //document.body.append(img);
  }
  getData();