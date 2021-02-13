const CustomError = require("../extensions/custom-error");

module.exports = function transform(numbers) {
  if(Array.isArray(numbers)==false){throw new TypeError('THROWN');}
  if(numbers.length==0){return []}
  let arr = [...numbers]
 for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next'&& i === arr.length - 1||arr[i] === '--double-next' && i === arr.length - 1) {
      arr[i] = ' ';
      continue
    }
    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      arr[i] = ' ';
      arr[i + 1] = ' ';
      continue;
    }

    if (arr[i] === '--discard-prev' && i === 0||arr[i] === '--double-prev' && i === 0) {
      arr[i] = ' ';
      continue;
    }

    if (arr[i] === '--discard-prev' && i !== 0) {
      arr[i - 1] = ' ';
      arr[i] = ' ';
      continue;
    }

    

    if (arr[i] === '--double-next' && i !== arr.length - 1) {
      arr[i] = arr[i + 1];
      continue;
    }

  
    if (arr[i] === '--double-prev' && i !== 0) {
      arr[i] = arr[i - 1];
      continue;
    }
  }
  return arr.filter(item => item !== ' ')
};
