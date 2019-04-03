(() => {

  const showCloseBtn = () => {
    _.show();
  };

  const showMenu = () => {

    showCloseBtn();
  };

  const slideSidebar = () => {
    showMenu();
  };

  const showBackground = () => {
    const val = slideSidebar();
  };

  showBackground();

})();



showCloseBtn
showMenu
slideSidebar
showBackground
anonimus