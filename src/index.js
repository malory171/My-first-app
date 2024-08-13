function showTemperature(response) {
  let displayedTemperature = document.querySelector("#current-temperature");
  let currentTemperature = Math.round(response.data.temperature.current);
  let actualCity = document.querySelector("#current-city");
  actualCity.innerHTML = response.data.city;
  displayedTemperature.innerHTML = currentTemperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "a3ab2befb0aeo33880eb42d02209d3et";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = addZero(now.getHours());
let minute = addZero(now.getMinutes());

let actualTime = document.querySelector("#actual-time");
actualTime.innerHTML = `${day} ${hour}:${minute}`;
