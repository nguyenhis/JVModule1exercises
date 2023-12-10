'use strict';
const numDice = +prompt("Enter the number of dice: ");
const sumEyes = +prompt("Enter the sum of eyes: ");
let hits = 0
for (let i = 0; i < 10000; i++){
  let sum = 0;
  for (let j = 0; j<numDice; j++){
    const dice = Math.floor(Math.random()*6) +1;
    sum += dice;
  }
  if(sum === sumEyes) hits++;
  console.log(sum, sumEyes, hits);
}
const probability = (hits/10000) *100;
document.querySelector('#target').innerHTML = `The probability to get the ${sumEyes} is ${probability.toFixed(2)}% .`