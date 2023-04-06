const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

const day1min = document.querySelector("#day1min");
const day1max = document.querySelector("#day1max");
const day2min = document.querySelector("#day2min");
const day2max = document.querySelector("#day2max");
const day3min = document.querySelector("#day3min");
const day3max = document.querySelector("#day3max");

const url =`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=a651a7deff585906158487df05cf592b`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    const humid = weatherData.main.humidity;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    humidity.textContent = humid;
  }

  const urlforcast =`https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=25&appid=a651a7deff585906158487df05cf592b`;

  async function apiFetchForecast() {
    try {
      const response = await fetch(urlforcast);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function dayConvert(day){
    if (day == 0){
      return "Sun";
    }
    else if (day == 1){
      return "Mon";
    }
    else if (day == 2){
      return "Tue";
    }
    else if (day == 3){
      return "Wed";
    }
    else if (day == 4){
      return "Thu";
    }
    else if (day == 5){
      return "Fri";
    }
    else{
      return "Sat";
    }
  }

  function displayForecast(fcast){
    const day1date = document.querySelector("#day1date");
    //day 1
    let day1datetxt = fcast.list[0].dt_txt;
    const date1 = new Date(day1datetxt);
    day1date.innerHTML = dayConvert(date1.getDay());
    console.log(date1.getDay());

    let day1mintemp = 1000;
    let day1maxtemp = 0;
    let i = 0;
    while (i < 8){
      let currentmin = parseInt(fcast.list[i].main.temp_min);
      let currentmax = parseInt(fcast.list[i].main.temp_max);
      if (currentmin < day1mintemp){
        day1mintemp = currentmin;
      }
      if (currentmax > day1maxtemp){
        day1maxtemp = currentmax;
      }

      i++;
    }

    //day 2
    const day2date = document.querySelector("#day2date");
    let day2datetxt = fcast.list[8].dt_txt;
    const date2 = new Date(day2datetxt);
    day2date.innerHTML = dayConvert(date2.getDay());
    console.log(date2.getDay());

    let day2mintemp = 1000;
    let day2maxtemp = 0;

    let j = 8;
    while (j < 16){
      let currentmin = parseInt(fcast.list[j].main.temp_min);
      let currentmax = parseInt(fcast.list[j].main.temp_max);
      if (currentmin < day2mintemp){
        day2mintemp = currentmin;
      }
      if (currentmax > day2maxtemp){
        day2maxtemp = currentmax;
      }

      j++;
    }

    //day 3
    const day3date = document.querySelector("#day3date");
    let day3datetxt = fcast.list[16].dt_txt;
    const date3 = new Date(day3datetxt);
    day3date.innerHTML = dayConvert(date3.getDay());
    console.log(date3.getDay());

    let day3mintemp = 1000;
    let day3maxtemp = 0;
    let k = 16;
    while (k < 24){
      let currentmin = parseInt(fcast.list[k].main.temp_min);
      let currentmax = parseInt(fcast.list[k].main.temp_max);
      if (currentmin < day3mintemp){
        day3mintemp = currentmin;
      }
      if (currentmax > day3maxtemp){
        day3maxtemp = currentmax;
      }

      k++;
    }
    day1min.innerHTML = `${day1mintemp.toFixed(0)}`;
    day1max.innerHTML = `${day1maxtemp.toFixed(0)}`;
    day2min.innerHTML = `${day2mintemp.toFixed(0)}`;
    day2max.innerHTML = `${day2maxtemp.toFixed(0)}`;
    day3min.innerHTML = `${day3mintemp.toFixed(0)}`;
    day3max.innerHTML = `${day3maxtemp.toFixed(0)}`;
  }
  
  apiFetch();
  apiFetchForecast();