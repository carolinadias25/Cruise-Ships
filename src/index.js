const Ship = require("./ship");

const port = "Southampton";

const ship = new Ship(port);

console.log(ship.port);

ship.setSail();

console.log(ship.port);
console.log(ship.setSail);

