const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wspeed');

const url =`https://api.openweathermap.org/data/2.5/weather?q=Ogden&units=imperial&appid=a651a7deff585906158487df05cf592b`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const wspeed = weatherData.wind.speed;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    windSpeed.textContent = wspeed.toFixed(0);
    GetWindChill();
  }
  
  apiFetch();



function GetWindChill(){
    const temp = parseInt(document.getElementById("temp").textContent);
    const speed = parseInt(document.getElementById("wspeed").textContent);
    const dchill = document.getElementById("chill");

    const windchill = 35.74 + 0.6215 * speed - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    const smallwc = windchill.toFixed(0);
    // console.log(temp);
    // console.log(speed);
    // console.log(windchill);
    if(temp <= 50 && speed > 3){
        dchill.innerHTML = smallwc + "&#8457;";
    }
    else{
        dchill.textContent = "N/A";
    }
}

