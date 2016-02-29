should = require 'should'
# require '../lib/number/genCode'
require '../lib'

describe 'genCode', ->
  it 'genCode', ->
    len = 100000
    t = {}
    err = []
    i = 0
    while i < len
      s = Number(15068729212 + i).genCode('QWERTYPASDFGHJKZXCNM2345679')
      if t[s]
        err.push
          s: s
          n1: i
          n2: t[s]
      t[s] = i
      i++
    err.should.with.lengthOf 0
    Object.keys(t).should.with.lengthOf len
    return
  return
