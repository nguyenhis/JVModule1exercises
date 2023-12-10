'use strict';
const choice = confirm("Should I calculate the square root? ");
const target = document.querySelector('#target');
if (choice){
  const num = prompt("Enter a number: ");
  if (num>=0){
    target.innerHTML = `The square root of ${num} is ${Math.sqrt(num)}.`
  }
  else{
    target.innerHTML = `The number is negative, square root of it is not defined.`;
  }
}
else{
  target.innerHTML = "The square root is not calculated as you wanted."
}