export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let half = parseInt(array.length / 2);
  let left = array.slice(0, half)
  let right = array.slice(half, array.length)

  function merge(left, right) {
  let newArray = [];
  while (left.length > 0 && right.length > 0) {
    newArray.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return newArray.concat(left).concat(right)
  };

  return merge(mergeSort(left), mergeSort(right))

}
