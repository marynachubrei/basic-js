const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
//   let count = 0
//   for(let i = 0;i<cat.length; i ++){
//   if(Array.from(cat.toString().split(',')).indexOf('^^',i)!==-1){
//   count = count + 1
// }else{return 0}
//   }
//   return count

let cats = cat.toString().split(',');
let count = 0
for(item of cats){
if(item =='^^'){
count = count + 1
}
}

return count
};
