const userInput = require('./userInput'); 

function reduceEquation(a,b,operator){
    switch(operator){
        case '+':
            return a + b;
        case '*':
            return a * b;
        case '/':
            return a / b
        case '-':
            return a - b;      
    }
}


function performOneCalculation(){
    console.log('\nPlease enter the operator:')
    operator = userInput.stringInput("Which operator would you like to use?");
    
    const iterations = userInput.numbinput('How many numbers to you want to ' + operator + '?');
  
    let numbers = new Array(iterations);
    for (let ix = 0; ix < iterations; ix++) {
        numbers[ix] = userInput.numbinput('\nPlease enter number ' + (ix + 1) +  ':');
    }

    if (operator == '/'){
        numbers = numbers.filter(function(item) {return item != 0;});
    }


    start = numbers.shift()
    var answer = numbers.reduce(function(accumulator, currentValue){ return reduceEquation(accumulator,currentValue,operator); }, start)
    console.log(`Answer is ${answer}`)
}

exports.performOneCalculation = performOneCalculation
