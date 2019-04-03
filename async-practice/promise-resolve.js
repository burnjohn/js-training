
const addFive = (numb) => numb + 5;

Promise.resolve([1,2,3,4])
	.then(arr => arr.reverse())
	.then(arr => arr.map(addFive))
	.then(arr => arr.reduce((acc, num) => acc + num))
	.then(num => console.log(num + 1000))