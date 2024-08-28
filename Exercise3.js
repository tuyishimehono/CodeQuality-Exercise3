//Implement a JavaScript function to find the sum of all elements in an array recursively.

const recursiveArraySum = (numbers) => {
  numbers[1] = numbers[0] + numbers[1];
  numbers.shift();
  while (numbers.length > 1) {
    return recursiveArraySum(numbers);
  }
  return numbers[0];
};
