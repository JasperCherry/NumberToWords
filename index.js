const stdin = process.openStdin();
const converter = require("./converter.js");

console.log('Enter "stop" and press enter to exit');
console.log('Enter number and press enter to convert number to words');

stdin.addListener("data", function (input) {
  let inputString = input.toString().trim();

  if (inputString === 'stop') {
    console.log('Program terminated');
    process.exit();
  }

  inputString = converter.convertStringToNumber(inputString);

  let finalOutput;
  if (inputString) {
    finalOutput = converter.convertNumberToWords(inputString);
  }

  if (finalOutput) {
    console.log(finalOutput);
  }
});