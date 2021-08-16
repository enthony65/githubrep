//Criar um conversor de números binários para a
//base 2 e/ou da base 2 para números binários.

const resto = function () {
  

  var inputnumber = document.getElementById("numid").value;
  var numatual = inputnumber;
  var binarys = [];
  var result = ``;
  while (numatual / 2 != 0) {
    binarys.push(numatual % 2);
    numatual = Math.trunc(numatual / 2);
  }
  binarys.reverse();
  for (var i = 0; i < binarys.length; i++) {
    result += binarys[i];
  }
  result = parseInt(result);

  var inputresul = document.getElementById("resultid");
  inputresul.value = result;
};
