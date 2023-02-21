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
  return c < 0 ? c + " is freezing temperature" : c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

function repeatStr(n, s) {
  return s.repeat(n);
}
