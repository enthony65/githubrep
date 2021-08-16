

function random( minNum, maxNum)  {
const min = Math.ceil(document.getElementById(`menorid`).value);
const max = Math.floor( document.getElementById(`maiorid`).value);
let calc = Math.floor(Math.random() * (max - min + 1)) + min;
const result = document.getElementById(`resultid`) 
result.value =  calc
}
