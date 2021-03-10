module.exports = function reverse (n) {
  if (n < 0){
    n = Math.abs(n);
  }
  let arr2 = n.toString().split('').reverse().join('');

  return arr2;
}
