const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/25d7d6a53d3036a5d6ba0520c7973abb/" +
    latitude +
    "," +
    longitude +
    "?units=si";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      console.log(body.daily.data[0]);

      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        high: body.daily.data[0].temperatureHigh,
        low: body.daily.data[0].temperatureLow,
        currently: body.currently.precipProbability
      });
    }
  });
};
module.exports = forecast;
