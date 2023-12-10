const numDice = prompt("How many dice would you like to roll? ");
let sum = 0;
for(let i = 0; i< numDice; i++){
  const dieValue = Math.floor(Math.random()*6) +1;
  sum += dieValue;
}
document.querySelector('#target').innerHTML = `The sum of ${numDice} dice is ${sum}.`