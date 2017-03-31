import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', () => {
  it('Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.', () => {
    expect(points).to.be.an('array')
    expect(points).to.deep.equal([
      [2,1],
      [4,0],
      [-1,0],
      [5,3],
      [-2,5],
      [3,-3],
      [-2,0],
      [3,4],
      [5,-4],
      [0,-2]
    ])
    expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })
})
