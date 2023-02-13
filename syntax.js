function main(verb, noun) {
  return verb + noun;
}

function sayHello(name) {
  return `Hello ${name}`;
}

var a = "dev";
var b = "lab";
var name = a + b;

function addFive(num) {
  var total = num + 5;
  return total;
}

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c < 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}
