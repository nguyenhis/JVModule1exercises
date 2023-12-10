'use strict';
const studentName = prompt("Input your name to get a sorted hat: ");
let printName = `Welcome ${studentName}, you belong to class `;
const randomNo = Math.floor(Math.random()*4) +1;
switch(randomNo){
  case 1:
    printName += 'Daredevil';
    break;
  case 2:
    printName += 'Slytherin';
    break;
  case 3:
    printName += 'Ravenclaw';
    break;
}
document.querySelector('#target').innerHTML = printName;
