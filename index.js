function add() {}
function subtract(){}
function multiply(){}
function divide(){}
function add() {
    return "something";
  }
  function add(a,b){return "something";}
  function add(a,b) {return a + b; }

  function subtract(a,b) {return a - b ; }
  function multiply (a,b) {return a * b ; }
  function divide(a,b) {return a / b ; }
  function increment(n) {
    return n + 1;
  }
  function decrement (n) { return n-1 ; }

  number = 10;
  function add() { return (number +=5); }
  function divideBy3() {
    return (number /= 3);
  }
  divideBy3();
  add5(); 
  number = 10;
  add5();
  divideBy3();

  function add(a , b) {return a + b  ;}
  function makeInt(n) {return parseInt (n);}
  function makeInt(n) {
    return parseInt(n, 10);
  }
  function preserveDecimal(n) {return parseFloat (n);}
  



