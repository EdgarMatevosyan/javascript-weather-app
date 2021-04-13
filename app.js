// Init weather object
const weather = new Weather("glendale", "CA");

// Init UI
const ui = new UI();

// Gey weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather());

// weather.changeLocation("glendale", "CA");

// Get weather and paint ui
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
