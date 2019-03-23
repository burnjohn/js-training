// Array
// Object
// Class
// Function
// Set
// Map


/*
 * Pseudo array - arguments
 *
 *
 */


// get the sum of all arguments of the function
// sum(1,2,3,4) === 10

const sum1 = function() {
  return Array.prototype.reduce.call(arguments, (acc, num) => acc + num);
};

const sum2 = function() {
  const arr = new Array(...arguments);
  // const arr = [...arguments];

  return arr.reduce((acc, num) => acc + num);
};

const sum3 = (...rest) => rest.reduce((acc, num) => acc + num);

console.log(sum3(1,2,3,4));

/*
 * Pseudo arrays - HTML collection (Node list)
 *
 */

/*
 * Object
 *
 */

// Example #1

var bob = {
  profession: 'developer',
  age: 24
};

var bill = bob;

bill.profession = 'QA';

console.log(bob);

bill = {
  profession: 'builder',
  age: 44
};

console.log(bob);

// Example #2

function getNewCar(car) {
  const newCar = {...car};
  // const newCar = Object.assign({}, car);

  newCar.model = 'BMW';

  return newCar;
}

const honda = {
  model: 'honda',
  age: 1982
};

const car = getNewCar(honda);

car.age = 0;

console.log(honda);



/*
 * Map example
 * Saving chat member
 */

const state = new Map();

const user = {
  name: 'Bob',
  sendMessage(){},
  enterChat(){},
  leaveChat(){},
};

const client = {
  device: 'Browser Chrome',
  emit(){},
  on(){},
  sendMessage(){},
};

function saveUser(user, client) {
  state.set(user, client);
}

function getClientByUser() {
  state.get(user);
}


