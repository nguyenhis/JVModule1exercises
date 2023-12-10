'use strict'
const firstNo = parseInt(prompt("Enter the first number: "));
const secNo = +prompt("Enter the second number: ");
const thiNo = +prompt("Enter the third number: ");

document.querySelector('#sum').innerHTML = `The sum of 3 numbers is ${firstNo + secNo + thiNo}.`;
document.querySelector('#product').innerHTML = `The product of 3 numbers is ${firstNo*secNo*thiNo}.`;
document.querySelector('#average').innerHTML = `The average of 3 numbers is ${(firstNo + secNo +thiNo)/3}. §111`;