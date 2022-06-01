'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var digito = num.split("");
  var sum = 0;
  for (var i = 0; i < digito.length; i++) {
      sum = sum + digito[i] * 2 ** (digito.length -1 -i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  var digito = [];
  while (num > 0) {
    digito.unshift(num%2);
    num = Math.floor (num/2);
  }
return digito.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}