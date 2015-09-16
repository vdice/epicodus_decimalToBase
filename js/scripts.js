function decimalToBase(number, base){
  var TO_ASCII_OFFSET = 65;
  var difference = number;
  var answer = [];
  var exponent = 0;

  while (number >= Math.pow(base, exponent)) {
    answer.push(0);
    exponent++;
  }
  exponent -= 1;

  for (var i = 0; i <= exponent; i++){
    while ((difference - Math.pow(base, exponent - i)) >= 0){
      answer[i] += 1;
      difference = difference - Math.pow(base, exponent - i);
    }
    if (answer[i] > 9){
      answer[i] = String.fromCharCode((answer[i] - 10) + TO_ASCII_OFFSET)
    }
  }

  return number === 0 ? '0' : answer.join("");
};

// solution using recursion supporting base <= 9:
// (NOTE: ~~ operator is a faster substitute for Math.floor())
// var t = function f(n, s, base) {
//     return n === 0 ? s || "0" : f(~~(n / base), (n % base) + s, base);
// }
//
// invoke with: t(2, "", 2) = "10" for decimal 2 to binary form

String.prototype.toBase = function(base) {
  var baseRepresentations = [];
  for (var i = 0; i < this.length; i++) {
    var asciiRepresentation = this.charCodeAt(i);
    var baseRepresentation = decimalToBase(asciiRepresentation, base);
    if (base === 2) {
      baseRepresentation = '0' + baseRepresentation
    }
    baseRepresentations.push(baseRepresentation);
  }
  return baseRepresentations.join("");
}
