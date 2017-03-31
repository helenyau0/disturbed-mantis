export default function binarySearch(array, number) {

  let startIndex = 0
  let endIndex = array.length - 1
  let mid = Math.round((endIndex - startIndex)/2)

  while(array[mid] != number && startIndex < endIndex) {
    if(array[mid] > number) {
      endIndex = mid - 1
    } else if(array[mid] < number) {
      startIndex = mid + 1
    }
    mid = Math.round((endIndex + startIndex)/2)
  }

  return (array[mid] != number) ? -1 : mid;

}
