let myArray= [`exp1`,`exp2`,`exp3`,`exp4`]

alert(myArray)
 var quest = parseInt(window.prompt(`MENU retirar elemento 
       1 - inserir elemento no fim do array        
       2 - inserir elemento no inicio   
       3 - remover do fim do array 
       4 - remover do inicio  `))

       
// console.log(typeof(quest))
       switch (quest) {
           case 1:
           var elem = window.prompt('qual elemento deseja inserir no final?')
           myArray.push(elem)
           console.log(myArray)
break;   
       
       case 2: 
       var elem1 = window.prompt(`qual elemento deseja inserir no inicio?`)
       myArray.unshift(elem)
       console.log(myArray)
       break;

       case 3: 
       console.log( `${myArray.pop()} foi retirado do final`)
       console.log(myArray)
 break;
       case 4:
              console.log(`${myArray.shift()} foi retirado do inicio`)
              console.log(myArray)
              break;
       }