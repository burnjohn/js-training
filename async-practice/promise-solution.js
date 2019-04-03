const showAfterTime = (timeout, data) => {
	return new Promise(
		(resolve, reject) => {
			setTimeout(() => reject(data), timeout);
		}
	);
}


const thinkAboutShopping = () => console.log('I\'d like to go to the shop');
const goToTheShop = () => console.log('I\'m in the shop now');
const buyProducts = () => console.log('I\'m buying products');
const payForProducts = () => console.log('I payed for products');


thinkAboutShopping();

showAfterTime(3000)
	.then(() => {
		goToTheShop();

		return showAfterTime(2000, 'here');
	})
	.then((data) => {
		console.log('Result from then #1', data);
		buyProducts();

		return showAfterTime(3000, 2);
	})
	.then((data) => {
		console.log('Result from then #2', data);
		payForProducts();

		return showAfterTime(3000);
	})
	.catch((err) => {
		console.log('error');
	})
	.finally(() => {
		console.log('I\'m at home');
	});


