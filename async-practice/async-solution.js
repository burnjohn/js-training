const showAfterTime = (timeout, data) => {
	return new Promise(
		(resolve, reject) => {
			setTimeout(() => resolve(data), timeout);
		}
	);
}


const thinkAboutShopping = () => console.log('I\'d like to go to the shop');
const goToTheShop = () => console.log('I\'m in the shop now');
const buyProducts = () => console.log('I\'m buying products');
const payForProducts = () => console.log('I payed for products');

( async() => {

	try {
		thinkAboutShopping();

		await showAfterTime(3000);

		goToTheShop();

		const result = await showAfterTime(2000, 'here');

		console.log(result);

		buyProducts();

		const result2 = await showAfterTime(3000, 2);

		console.log(result2);

		payForProducts();

		await showAfterTime(3000);

		console.log('I\'m at home');
	} catch (err) {
		console.log('error');
	} 

	
})();
