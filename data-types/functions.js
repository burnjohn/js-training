
function carFactory(model, year) {
  this.model = model;
  this.year = year;
}

const wrongCar = carFactory('honda', 1982);

const correctCar = new carFactory('honda', 1982);


// Function arity example
// к-во аргументов ожидаемых функцией


function a(){}

a.length; // 0

a(1,2,3,4,5,6,7);