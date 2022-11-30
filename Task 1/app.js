const arr = [1, 25, 244, 44, 55, 22, 64];

function findMiidlepoint(array) {
  // Find Sum With Reduce
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  //   Find middle point
  return sum / arr.length;
}

console.log(findMiidlepoint(arr));
