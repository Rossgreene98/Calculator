const readline = require('readline-sync');


function numbinput(myprompt){
    console.log(myprompt);
    const userinput = readline.prompt();
    return +userinput
}

function stringInput(myprompt){
    console.log(myprompt);
    const userinput = readline.prompt();
    return userinput
}

exports.numbinput = numbinput;
exports.stringInput = stringInput;

