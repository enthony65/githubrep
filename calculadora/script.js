function insert (num) {
   var numero= document.getElementById(`resultado`).innerHTML //innerhtml = dentro do html
   document.getElementById(`resultado`).innerHTML = numero + num;

}

function clean() {  // se tiver o nome de um metodo ja existente da errado
    document.getElementById(`resultado`).innerHTML = ``;
}

function erase() {
var resultado = document.getElementById(`resultado`).innerHTML;
document.getElementById(`resultado`).innerHTML = resultado.substring(0,resultado.length -1); // retira um numero 
}

function calcular(){
var resultado = document.getElementById(`resultado`).innerHTML
if (resultado) {
    document.getElementById(`resultado`).innerHTML = eval(resultado);
}
else {
   window.alert (` Nada para calcular`)
}

}