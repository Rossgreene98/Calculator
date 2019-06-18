
const userInput = require('./userInput');
const calculation = require('./calculation');
const vowellCount = require('./vowellCount');

function welcome(){ 
  console.log('\nWelcome to the calculator!');
  console.log('==============================');
}

function getCalculationMode() {
  console.log('Which calculator mode do you want?');
  return userInput.numbinput(`\
${ARITHMETIC_MODE}) Arithmetic
${VOWEL_COUNTING_MODE}) Vowel counting`);
}

const ARITHMETIC_MODE = 1;
const VOWEL_COUNTING_MODE = 2;

welcome()

while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    calculation.performOneCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowellCount.performOneVowelCountingCalculation();
  }
}