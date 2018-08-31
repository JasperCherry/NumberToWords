exports.convertStringToNumber = function(inputString) {
  
  const inputNumber = Number(inputString);
  
  if(isNaN(inputNumber)) {
    console.log('Given input is not a number');
    return false;
  } else if(inputNumber<0) {
    console.log('Given number is smaller then 0');
    return false;
  } else if(inputNumber>999999999) {
    console.log('Given number is larger then 999999999');
    return false;
  } else if(!Number.isInteger(inputNumber)) {
    console.log('Given number is not an integer');
    return false;
  }  

  return inputString;
};

exports.convertNumberToWord = function(inputNumber) {
  return inputNumber;
};
