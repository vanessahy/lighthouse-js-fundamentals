//each container can hold 100 bottles
//a container will only be sent if it's full

function howManyHundreds(num) {
  return Math.floor (num / 100); 
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);