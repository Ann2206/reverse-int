module.exports = function reverse (n) {
  var arr2 = [];
  for(let i=n.length-1; i>=0; i--){
     arr2.push(n[i]);
  }
  return arr2;
}
