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
    const nextLetter = reverseRomanArray[i + 1];
    if (nextLetter && romanMap[letter] > romanMap[nextLetter]) {
      result = result + (romanMap[letter] - romanMap[nextLetter]);
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
