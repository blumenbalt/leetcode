/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let reverseRomanArray = s.split("").reverse();
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < reverseRomanArray.length; i++) {
    const letter = reverseRomanArray[i];
    if (letter === "V" && reverseRomanArray[i + 1] === "I") {
      result = result + 4;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }

    if (letter === "X" && reverseRomanArray[i + 1] === "I") {
      result = result + 9;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }

    if (letter === "L" && reverseRomanArray[i + 1] === "X") {
      result = result + 40;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }

    if (letter === "C" && reverseRomanArray[i + 1] === "X") {
      result = result + 90;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }

    if (letter === "D" && reverseRomanArray[i + 1] === "C") {
      result = result + 400;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }

    if (letter === "M" && reverseRomanArray[i + 1] === "C") {
      result = result + 900;

      reverseRomanArray.splice(i + 1, 1);
      continue;
    }
    result = result + romanMap[letter];
  }

  return result;
};

console.log(romanToInt("III")); //3
console.log(romanToInt("IV")); //4
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994

//VICXMCM
//XVII IIVX

//IV VI
//optimized version next
