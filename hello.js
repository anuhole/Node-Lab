console.log("hello")

let mod = require("./MyModule")
console.log(mod.sname , mod.age)

mod.sayhelloInEnglish()
mod.sayInSpanish()

let mod1 = require("./StringOp")

console.log(mod1.add(4,5))
console.log(mod1.convertToUpperCase("anushka"))