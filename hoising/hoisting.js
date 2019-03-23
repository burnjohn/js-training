/*
 * Hoisting
 */

// Error
function func() {
  func2();

  var func2 = function(){
    console.log('works');
  };
}

func();


function func() {
  func2();

  function func2 (){
    console.log('works');
  }
}

func();

// Example #2

const a = 1 && 'here' && func();
const func = function () { return 3 };

const b = '' || 1 || 'there';
const c = 1 && 2 && func();


// Closures example

var a = {b:2};

function test () {
  var b = {g:3};
  debugger

  function g() {
    var q = 2;

    console.log(b);

    debugger

    function h(){
      var t = 2;
      var h = 2;
      console.log(q, b);
      debugger
    }

    h();

  }

  g();
}

// Closures example

var a = 7;

function test () {
  console.log(a);
}

function b() {
  var a = 10;

  test();
}

b();

// Closures example

(() => {
  console.log(a);
  let a;

})();