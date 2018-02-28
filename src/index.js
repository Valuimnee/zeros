module.exports = function getZerosCount(number) {
  // your implementation
  var count=0;
  while(number>0){
    number=number/5 | 0;
    count+=number;
  }
  return count;
}
