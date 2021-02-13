const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a={}
  a.turns = Math.pow(2,disksNumber)-1;
  a.seconds = Math.floor(3600*a.turns/turnsSpeed);
  return a
};
