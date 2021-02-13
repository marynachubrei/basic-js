const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)==false||!members){return false}
  let a =members.filter(item=>typeof item == 'string')
  let b =[]

  for(let i = 0; i<a.length;i++){
  	a[i]=a[i].replace( /\s/g, "").toUpperCase()
  	b.push(a[i][0])
  } 
  return b.sort().join('').toString()
}
