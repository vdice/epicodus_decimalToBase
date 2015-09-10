function decimalToBase(number, base){

  var difference = number;
  var answer = [];
  var exponent = 0;

  while (number >= Math.pow(base, exponent)) {
    answer.push(0);
    exponent++;
  }

  exponent -= 1;

  for (var i = 0; i <= exponent; i++){
    if ((difference - Math.pow(base, exponent - i)) >= 0){
      answer[i] = 1;
      difference = difference - Math.pow(base, exponent - i);
    }
  }

  return number === 0 ? '0' : answer.join("");
};
