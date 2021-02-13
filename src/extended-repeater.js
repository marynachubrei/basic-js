const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if(str == null){str='null'}
str=str.toString()
let addRepeatTimes
let addTimes
 if(options.additionSeparator==undefined){options.additionSeparator=''}
 if(options.additionSeparator==undefined){options.additionSeparator=''}
if(options.separator==undefined){options.separator='+'} 
if(options.additionRepeatTimes!==undefined){addRepeatTimes=options.additionRepeatTimes-1} else{addRepeatTimes=0}
if(options.repeatTimes!==undefined){addTimes=options.repeatTimes-1} else{addTimes=0} 
  let a =options.addition + (options.additionSeparator + options.addition).repeat(addRepeatTimes)
  let b = str + a + ( options.separator+str + a).repeat(addTimes)
   

return b.replace(/undefined/g,"")
}