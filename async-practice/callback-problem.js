const showAfterTime = (timeout, cb) => {
	setTimeout(() => {
		cb();
	}, timeout);
};


const thinkAboutShopping = () => console.log('I\'d like to go to the shop');
const goToTheShop = () => console.log('I\'m in the shop now');
const buyProducts = () => console.log('I\'m buying products');
const payForProducts = () => console.log('I payed for products');


thinkAboutShopping();

showAfterTime(3000, () => {
	goToTheShop();

	showAfterTime(1000, () => {
		buyProducts();
		
		showAfterTime(2000, () => {
			payForProducts();
		})
	})
});

