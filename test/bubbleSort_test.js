import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', () => {
  it('Sort an array of numbers using the bubble sort algorithm.', () => {
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('compares each pair of adjacent items and swaps them if they are in the wrong order.', () => {
    expect(bubbleSort([3, 1, 5, 8, 10, 2, 6])).to.deep.equal([1, 2, 3, 5, 6, 8, 10])
  })
  it('will repeat until no swaps are required, indicating that the list is sorted from lowest to highest number.', () => {
    expect(bubbleSort([2, 2, 9, 9, 4, 3, 1, 0])).to.deep.equal([0, 1, 2, 2, 3, 4, 9, 9])
  })
})
