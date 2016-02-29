_ = undefined
should = undefined
should = require('should')
_ = require('../lib')
describe 'number', ->
  it 'random [[1, 40], [2, 100], [3, 890]]', ->
    count = {}
    i = 0
    while i < 1000
      num = _.randomByCount([
        [
          1
          4
        ]
        [
          2
          10
        ]
        [
          3
          89
        ]
      ])
      count[num] = (count[num] or 0) + 1
      i++
    count[1].should.greaterThan 10
    count[1].should.lessThan 70
    count[2].should.greaterThan 70
    count[2].should.lessThan 130
    count[3].should.greaterThan 790
    count[3].should.lessThan 990
    return
  return
