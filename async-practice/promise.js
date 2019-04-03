const promisify = (func) => () => new Promise((resolve) => func(resolve));

const showBackground = (resolve) => {
  setTimeout(() => {
    console.log('showBackground works!!!');
    resolve();
  } , 3000);
};

const slideSidebar = (resolve) => {
  setTimeout(() => {
    console.log('slideSidebar works!!!');
    resolve();
  } , 3000);

};
const showMenu = (resolve) => {
  setTimeout(() => {
    console.log('showMenu works!!!');
    resolve();
  } , 3000);

};
const showCloseBtn = (resolve) => {
  setTimeout(() => {
    console.log('showCloseBtn works!!!');
    resolve();
  } , 3000);
};

const showBackgroundAsync = promisify(showBackground);
const slideSidebarAsync = promisify(slideSidebar);
const showMenuAsync = promisify(showMenu);
const showCloseBtnAsync = promisify(showCloseBtn);

// (async() => {
//   await showBackgroundAsync();
//   await slideSidebarAsync();
//   await showMenuAsync();
//   await showCloseBtnAsync();

// })();


// showBackgroundAsync()
//   .then(slideSidebarAsync)
//   .then(showMenuAsync)
//   .then(showCloseBtnAsync);

(async() => {

  const operations = [showBackgroundAsync, slideSidebarAsync, showMenuAsync, showCloseBtnAsync];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    await operation();
  }

})();


