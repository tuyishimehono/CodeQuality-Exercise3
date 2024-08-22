//Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.

const getNestingLevel = (array) => {
  let maxNest = 1;
  array.forEach((e) => {
    if (Array.isArray(e)) {
      const depth = getNestingLevel(e);
      if (depth + 1 > maxNest) {
        maxNest = depth + 1;
      }
    }
  });
  return array.flat(maxNest);
};
