const userInput = require('./userInput');

function countVowels(string) {
    string = string.toUpperCase()
    console.log(string)
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) {
        if (counts.hasOwnProperty(char)) {
            counts[char]++;
        }
    }
    return counts;
  }
  
  function performOneVowelCountingCalculation() {
    const string = userInput.stringInput('Please enter a string:');
    const answer = countVowels(string);
  
    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
  }

  exports.performOneVowelCountingCalculation = performOneVowelCountingCalculation;


