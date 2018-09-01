const stdin = process.openStdin();
const converter = require("./converter.js");

stdin.addListener("data", function (input) {
  let inputString = input.toString().trim();
  inputString = converter.convertStringToNumber(inputString);

  let finalOutput;
  if (inputString) {
    finalOutput = converter.convertNumberToWord(inputString);
  }

  if (finalOutput) {
    console.log(finalOutput);
  }
});