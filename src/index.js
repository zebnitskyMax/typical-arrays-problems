exports.min = function min(array) {
       let resultMin =  Math.min.apply(null, array) 
  return resultMin;
}

exports.max = function max(array) {
  let resultMax= Math.max.apply(null, array)
       return resultMax ;
}

exports.avg = function avg(array) {
    let avenger = array.reduce((sum, current) => (sum + current), 0);
  return avenger/(array.length);
}
