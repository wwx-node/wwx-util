_ = undefined
should = undefined

People = ->
  @execMethods = []
  return

should = require('should')
_ = require('../lib')

People::test1 = (context) ->
  @execMethods.push 'test1'
  return

People::test2 = (context) ->
  @execMethods.push 'test2'
  return

People::atest2 = (context) ->
  @execMethods.push 'atest2'
  return

describe 'Object', ->
  it 'execMethods', ->
    p = new People('tom')
    p.name = 'wwx'
    p.execMethods.should.be.eql []
    Object.execMethods p, /^test*/, 1, 'People'
    p.execMethods.should.be.eql [
      'test1'
      'test2'
    ]
    return
  return
