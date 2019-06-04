console.log('Welcome to the calculator!');
const readline = require('readline-sync');

console.log('Which operator would you like to use?');
const oper = readline.prompt("word");

var opertextfn = function(oper){
    const ops = ['*', '-', '+', '/'];
    var txtops = ['Multiply', 'Subtract', 'Add', 'Divide']
    return txtops[ops.indexOf(oper)]; // find index of operator
}

console.log('How many numbers would you like to ' + opertextfn(oper));
const n = readline.prompt(); // # of #

var numbers = new Array(0)
for (i = 0; i < +n; i++) {
    console.log('Enter next Numer');
    const newvalue = readline.prompt(); // # of #
    numbers.push(+newvalue)
}

var dosum = function(a,b,oper){
  switch (oper) { 
    case "+":
      return a + b 
      break;
    case "/":
      return a / b
      break;
    case "-":
      return a - b
      break;
    case "*":
      return a * b
      break;
    default: 
      console.log("None of those are valid operators")
      break;
  }
}

var answer = numbers.reduce(function(accumulator, currentValue) { return dosum(accumulator,currentValue, oper); }, 0);


