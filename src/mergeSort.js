export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var half = parseInt(array.length / 2);
  var left = array.slice(0, half)
  var right = array.slice(half, array.length)

  function merge(left, right) {
  var arry = [];
  while (left.length > 0 && right.length > 0) {
    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arry.concat(left).concat(right);
  };

  return merge(mergeSort(left), mergeSort(right))

}
