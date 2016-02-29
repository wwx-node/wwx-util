_ = undefined
should = undefined
should = require('should')
_ = require('../lib')
describe 'Number', ->
  it 'toFix2', ->
    Number(12.34567).toFixed2(-3).should.be.eql 0
    Number(12.34567).toFixed2(-2).should.be.eql 0
    Number(12.34567).toFixed2(-1).should.be.eql 10
    Number(12.34567).toFixed2(0).should.be.eql 12
    Number(12.34567).toFixed2(1).should.be.eql 12.3
    Number(12.34567).toFixed2(2).should.be.eql 12.34
    Number(12.34567).toFixed2(3).should.be.eql 12.345
    Number(12.34567).toFixed2(4).should.be.eql 12.3456
    Number(12.34567).toFixed2(5).should.be.eql 12.34567
    Number(12.34567).toFixed2(6).should.be.eql 12.34567
    Number(12.34567).toFixed2(7).should.be.eql 12.34567
    return
  return
