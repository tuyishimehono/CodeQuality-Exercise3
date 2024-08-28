//Implement a JavaScript function to remove duplicate elements from an array.

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
