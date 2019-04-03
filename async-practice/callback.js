const showBackground = (cb) => {
  setTimeout(() => {
    console.log('showBackground works!!!');
    cb && cb();
  } , 3000);

};
const slideSidebar = (cb) => {
  setTimeout(() => {
    console.log('slideSidebar works!!!');
    cb && cb();
  } , 3000);

};
const showMenu = (cb) => {
  setTimeout(() => {
    console.log('showMenu works!!!');
    cb && cb();
  } , 3000);

};
const showCloseBtn = (cb) => {
  setTimeout(() => {
    console.log('showCloseBtn works!!!');
    cb && cb();
  } , 3000);
};

showCloseBtn(
  () => showMenu(
    () => slideSidebar(
      () => showBackground()
    )
  )
);




