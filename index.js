function sumItems(array) {

  let sum = 0;
  
  for (num of array) {
    Array.isArray(num) ? sum += sumItems(num) : sum += num
  }

  return sum;
}

module.exports = sumItems;