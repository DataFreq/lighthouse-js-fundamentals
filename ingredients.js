const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('[ WHILE LOOP ]\n');

let i = 0
while (i < ingredients.length){
	console.log(ingredients[i]);
	i++;
}

console.log('\n[ WHILE LOOP ]\n');

// Write a for loop that prints out the contents of ingredients:
console.log('\n[ FOR LOOP ]\n');

for (let x = 0; x < ingredients.length; x++) {
	console.log(ingredients[x]);
}

console.log('\n[ FOR LOOP ]\n');

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\n[ BACKWARDS LOOP ]\n');

ingredients.reverse();
for (let y = 0; y < ingredients.length; y++) {
	console.log(ingredients[y]);
}

console.log('\n[ BACKWARDS LOOP ]');

