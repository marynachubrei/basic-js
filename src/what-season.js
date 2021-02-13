const CustomError = require("../extensions/custom-error");

 module.exports = function getSeason(date)  {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if ( isNaN(date.getTime())) {
      throw new Error('error'); 
  } else if (Date.parse(date)) {
    let seasons = ['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter']
    
     return seasons[date.getMonth()]}else{throw new Error ('Error')}

  };

