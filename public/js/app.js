console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

//messageOne.textContent = "From Javascript";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading..";
  messageTwo.textContent = "";
  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        console.log(data);
        console.log(data.forecast.temperature);
        messageOne.textContent = data.location;
        messageTwo.textContent =
          data.forecast.summary +
          "The temperature is " +
          data.forecast.temperature +
          " degree celsius. The high today is " +
          data.forecast.high +
          " and low today is " +
          data.forecast.low +
          ". There is " +
          data.forecast.currently +
          "% chance of rain .";
        console.log(data.location);
      }
    });
  });
});
