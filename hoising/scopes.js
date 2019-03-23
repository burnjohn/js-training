
// Function scope

(() => {
  for (var i = 0; i < 10; i++) {}
  console.log(i);
})();


// Block scope

(() => {
  {
    let i = 10;
    const b = 2;
  }
  console.log(i, b);
})();


