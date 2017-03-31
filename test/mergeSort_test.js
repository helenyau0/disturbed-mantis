import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', () => {
  it('Sort an array of numbers using the merge sort algorithm.', () => {
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('divides the array into equal halves and then combines them in a sorted manner.', () => {
    expect(mergeSort([0, 22, 5, 2, 3, 9, 10, 1])).to.deep.equal([0, 1, 2, 3, 5, 9, 10, 22])
  })
  it('will sort through an unordered list until it is ordered from lowest to highest number ', () => {
    expect(mergeSort([2, 2, 9, 9, 4, 3, 1, 0])).to.deep.equal([0, 1, 2, 2, 3, 4, 9, 9])
  })
})
