const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log (ingredients[i]);
  i++;
}

//write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log (ingredients[i]);
}

// write any loop (while or for) that prints out the contents of ingredients backwards:

const reversedArray = []
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log (ingredients[i]);
}