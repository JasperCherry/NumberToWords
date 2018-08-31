const stdin = process.openStdin();
const converter = require("./converter.js");

stdin.addListener("data", function(input) {
    const inputString = input.toString();
    const inputNumber = converter.convertStringToNumber(inputString);
    
    let finalOutput;
    if(inputNumber) {
      finalOutput = converter.convertNumberToWord(inputNumber);
    }

    if(finalOutput){
      console.log(finalOutput);
    }
    
  });