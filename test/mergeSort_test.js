import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', () => {
  it('Sort an array of numbers using the merge sort algorithm.', () => {
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
