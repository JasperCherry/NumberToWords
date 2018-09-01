exports.convertStringToNumber = function (inputString) {

  const inputNumber = Number(inputString);

  if (isNaN(inputNumber)) {
    console.log('Given input is not a number');
    return false;
  } else if (inputNumber < 0) {
    console.log('Given number is smaller then 0');
    return false;
  } else if (inputNumber > 999999999) {
    console.log('Given number is larger then 999999999');
    return false;
  } else if (!Number.isInteger(inputNumber)) {
    console.log('Given number is not an integer');
    return false;
  }

  return inputString;
};

exports.convertNumberToWord = function (inputString) {

  let allWords = [];

  if (inputString.length <= 3) {
    assingThreeDigitMax(allWords, inputString);
  } else if (inputString.length <= 6) {
    assingThreeDigitMax(allWords, inputString.substring(0, inputString.length - 3));
    if (Number(inputString.substring(0, inputString.length - 3)) !== 0) {
      allWords.push('thousand');
    }
    assingThreeDigitMax(allWords, inputString.substring(inputString.length - 3, inputString.length));
  } else if (inputString.length <= 9) {
    assingThreeDigitMax(allWords, inputString.substring(0, inputString.length - 6));
    if (Number(inputString.substring(0, inputString.length - 3)) !== 0) {
      allWords.push('million');
    }
    assingThreeDigitMax(allWords, inputString.substring(inputString.length - 6, inputString.length - 3));
    if (Number(inputString.substring(inputString.length - 6, inputString.length - 3)) !== 0) {
      allWords.push('thousand');
    }
    assingThreeDigitMax(allWords, inputString.substring(inputString.length - 3, inputString.length));
  }

  let finalString = '';

  allWords.forEach(word => {
    if (word) {
      finalString += word;
      finalString += ' ';
    }
  });

  finalString = finalString.trim();

  return finalString;
};

function assingThreeDigitMax(allWords, inputString) {
  if (inputString.length === 3) {
    allWords = assignThreeDigit(allWords, inputString)
  } else if (inputString.length === 2) {
    allWords = assignTwoDigit(allWords, inputString);
  } else if (inputString.length === 1) {
    allWords = assignOneDigit(allWords, inputString);
  }

  return allWords;
}

function assignThreeDigit(allWords, inputString) {
  allWords.push(assign0to19(inputString[0], false));

  if (inputString[0] !== '0') {
    allWords.push('hundred');
  }

  if (inputString[0] + inputString[1] + inputString[2] !== '000') {
    if (Number(inputString[1] + inputString[2]) < 20) {
      allWords.push(assign0to19(inputString[1] + inputString[2], false));
    } else {
      if (inputString[2] === '0') {
        allWords.push(assign20to90(inputString[1]));
      } else {
        allWords.push(assign20to90(inputString[1]));
        allWords.push(assign0to19(inputString[2], false));
      }
    }
  }

  return allWords;
}

function assignTwoDigit(allWords, inputString) {
  if (Number(inputString[0] + inputString[1]) < 20) {
    allWords.push(assign0to19(inputString[0] + inputString[1], false));
  } else {
    if (inputString[1] === '0') {
      allWords.push(assign20to90(inputString[0]));
    } else {
      allWords.push(assign20to90(inputString[0]));
      allWords.push(assign0to19(inputString[1], true));
    }
  }

  return allWords;
}

function assignOneDigit(allWords, inputString) {
  allWords.push(assign0to19(inputString[0], true));

  return allWords;
}

function assign0to19(number, placeZero) {
  if (placeZero && (number === '0' || number === '00')) {
    return 'zero';
  }
  if (number === '1' || number === '01') {
    return 'one';
  }
  if (number === '2' || number === '02') {
    return 'two';
  }
  if (number === '3' || number === '03') {
    return 'three';
  }
  if (number === '4' || number === '04') {
    return 'four';
  }
  if (number === '5' || number === '05') {
    return 'five';
  }
  if (number === '6' || number === '06') {
    return 'six';
  }
  if (number === '7' || number === '07') {
    return 'seven';
  }
  if (number === '8' || number === '08') {
    return 'eight';
  }
  if (number === '9' || number === '09') {
    return 'nine';
  }
  if (number === '10') {
    return 'ten';
  }
  if (number === '11') {
    return 'eleven';
  }
  if (number === '12') {
    return 'twelve';
  }
  if (number === '13') {
    return 'thirteen';
  }
  if (number === '14') {
    return 'fourteen';
  }
  if (number === '15') {
    return 'fifteen';
  }
  if (number === '16') {
    return 'sixteen';
  }
  if (number === '17') {
    return 'seventeen';
  }
  if (number === '18') {
    return 'eighteen';
  }
  if (number === '19') {
    return 'nineteen';
  }
  return '';
}

function assign20to90(number) {
  if (number === '2') {
    return 'twenty';
  }
  if (number === '3') {
    return 'thirty';
  }
  if (number === '4') {
    return 'fourty';
  }
  if (number === '5') {
    return 'fifty';
  }
  if (number === '6') {
    return 'sixty';
  }
  if (number === '7') {
    return 'seventy';
  }
  if (number === '8') {
    return 'eighty';
  }
  if (number === '9') {
    return 'ninety';
  }
  return '';
}