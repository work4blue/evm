print('test -- math');
//此处Math要变成object, 无需()
var a = Math
print(1, 2)
print(a.abs(-3.0002, 11111, "sdsdsd"))
print(a.abs(-3.1))
print(a.abs(-3.00000000001))
print(a.abs("111"))
print(a.abs("0x131abcdef"))
print(a.abs("aaa"))
print(a.abs("0x131ttt"))
print(a.abs("aa"))
print(a.abs("*"))
assert (a.acos(1) === 0)
print(a.acos(-0.8))
print(a.acosh(-1111))
print(a.acos(-0.4))
print(a.asin(-0.4))
print(a.asinh(-0.4))
print(a.atan(-0.4))
print(a.atanh(-0.4))
print(a.cbrt(-0.4))
print(a.ceil(-0.4))
print(a.clz32(-0.4))
print(a.cos(-0.4))
print(a.cosh(-0.4))
print(a.exp(-0.4))
print(a.expm1(-0.4))
print(a.floor(-0.4))
print(a.hypot(3, 4))
print(a.imul(-5, 10))
print(a.imul(0xfffffff, 5))
print(a.log(-0.4))
print(a.log1p(-0.4))
print(a.log2(-0.4))
print(a.log10(-0.4))
print(a.max(1, 2, 4))
print(a.min(1, 2, 4))
print(a.pow(2, 4))
print(a.random())
print(a.round(-0.4))
print(a.sin(-0.4))
print(a.sinh(-0.4))
print(a.sqrt(-0.4))
print(a.tan(-0.4))
print(a.tanh(-0.4))
print(a.trunc(-0.4111))

assert (a.acos(2) === NaN);

var arr = ['a', 'b', 'c'];
print(typeof arr)

assert (Math.hasOwnProperty('abs'))
assert (Math.constructor === Object)