var greeter = require('./Greeter.js') //웹팩은 commonJS 모듈 require을 기본적으로 지원한다.
console.log('greeter', greeter.hi)
document.getElementById("root").appendChild(greeter.hi())
