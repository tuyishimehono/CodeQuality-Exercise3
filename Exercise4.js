//Implement a JavaScript function to remove duplicate elements from an array.

const removeDuplicates = (arr) => {
  return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
};
