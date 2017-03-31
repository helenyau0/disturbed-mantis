import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch', () => {
  it('Search for a number within an array using the binary search algorithm.', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45)).to.deep.equal(8)
  })
  it('will search for the evaluated number and return its index value', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 20)).to.deep.equal(3)
  })
})
