function convertToRoman(num) {
  	 const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['L', 50],
    6: ['X', 10],
    7: ['XL', 40],
    8: ['V', 5],
    9: ['IV', 4],
    10: ['I', 1],
  };

  let ans = '';

  const len = Object.keys(obj).length;

  // Process special cases first (subtractive notation)
  for (let i = 0; i < len; i++) {
    const [roman, val] = obj[i];

    while (num >= val) {
      ans += roman;
      num -= val;
    }
  }

  return ans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
