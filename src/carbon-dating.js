const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if(typeof A0 !=='string'){return false} 
    if(+A0 <= 0||+A0>MODERN_ACTIVITY){return false}
 	 let t = Math.ceil(Math.log(MODERN_ACTIVITY/A0)*HALF_LIFE_PERIOD/0.693) 
};
