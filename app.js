// Init weather object
const weather = new Weather("glendale", "CA");

weather
  .getWeather()
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
