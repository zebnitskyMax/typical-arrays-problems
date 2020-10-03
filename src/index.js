exports.min = function min(array) {
        return array.sort((a, b) => a - b)[0] ;
}

exports.max = function max(array) {
       return Math.max.apply(null, array) ;
}

exports.avg = function avg(array) {
    let avenger = array.reduce((sum, current) => (sum + current), 0);
  return avenger/(array.length-1);
}
