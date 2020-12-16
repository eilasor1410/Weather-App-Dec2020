let now = new Date();

let currentDateTime = document.querySelector("#current-date-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
//let year = now.getFullYear();
let month = months[now.getMonth()];
let day = days[now.getDay()];

currentDateTime.innerHTML = `${day} ${date} ${month} ・ ${hour}:${minutes}`;

function currentCity(event) {
  event.preventDefault();
  let apiKey = "00f5b26afcbaa563aa89ecdc5d2dba0e";
  let cityInput = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  document.querySelector("#display-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", currentCity);
