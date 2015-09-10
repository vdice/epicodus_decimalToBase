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
    while ((difference - Math.pow(base, exponent - i)) >= 0){
      answer[i] += 1;
      difference = difference - Math.pow(base, exponent - i);
    }
    if (answer[i] >= 9){
      answer[i] = String.fromCharCode(answer[i] - 10 + 65)
    }
  }

  return number === 0 ? '0' : answer.join("");
};
