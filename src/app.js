function formatDate(timestamp) {}

function displayTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let skiesElement = document.querySelector("#skies");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  skiesElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.coord.dt * 1000);
}

let apiKey = "7f1abb7499ee1372068a93b1153535be";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
