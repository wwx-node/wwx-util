var cache = require('memory-cache')
var _ = require('lodash')
var isFunction = _.isFunction

function matchMethods (Model, reg) {
  var resultMethods = []
  var properties = Object.getOwnPropertyNames(Model)

  properties.forEach(function (property) {
    if (reg.test(property) && isFunction(Model[property])) {
      resultMethods.push(property)
    }
  })

  Object.keys(Model.__proto__).forEach(function (property) {
    if (reg.test(property) && isFunction(Model[property])) {
      resultMethods.push(property)
    }
  })
  return resultMethods
}
/**
 * 执行匹配的class方法
 * @param Model
 * @param reg
 * @param context
 * @param cacheKey
 */
function execMethods (Model, reg, context, cacheKey) {
  Object.matchMethods(Model, reg, cacheKey)
    .forEach(function (property) {
      if (reg.test(property)) {
        Model[property](context)
      }
    })
}

if (!Object.execMethods) {
  Object.matchMethods = function (Model, reg, cacheKey) {
    if (cacheKey) {
      var methods = cache.get(cacheKey + reg)
      if (!methods) {
        methods = matchMethods(Model, reg)
        cache.put(cacheKey + reg, methods, 30 * 60 * 1000)
      }
      return methods
    }
    return matchMethods(Model, reg)
  };
  Object.execMethods = execMethods
}
