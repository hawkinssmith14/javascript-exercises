const convertToCelsius = function(tempInFahrenheit) {
  let notRounded = (tempInFahrenheit - 32) * 5/9;
  return Math.round(notRounded * 10) / 10;
};

const convertToFahrenheit = function(tempInCelcius) {
  let notRounded = tempInCelcius * (9/5) + 32;
  return Math.round(notRounded * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
