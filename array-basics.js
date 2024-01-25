// declaration of an array

const person = {
  name: "Paul",
  age: 27,
};

let fruits = ["apple", "guava", "melon", person];

// add an element at the end of the array
fruits.push("orange");

// remove an element at the end of the array
let popped = fruits.pop();
//  pop() returns the element that has been removed
// console.log(popped);

// add to the begining of the array
fruits.unshift("banana");

// remove from the beginning of the list
fruits.shift();

// looping through an Array
for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
  //   console.log(fruits[i]);
  i++;
}

let numbers = [1, 2, 3, 4, 5, 6];

// map method
numbers.map((number, index, array) => {
  //   console.log(number, index, array);
});

// filter method
const newNumbers = numbers.filter((number) => {
  return number > 3;
});

// reduce method - takes a previous state and returns a single state from all the values
const sum = numbers.reduce((prev, number) => {
  return prev + number;
}, 6);

// some in javascript - returns true or false for a given condition
const result = numbers.some((number) => {
  return number > 5;
});

// every in javascript - return true or false if all elements in an array meet a certain condition
const res = numbers.every((number) => {
  return number % 2 === 0;
});

// find in javascript - returns the first element that meets a given condition
const ares = numbers.find((number) => {
  return number > 3;
});
// console.log(ares);

// concat
const names = ["mike", "andrew", "alex", "edna", "effie"];
fruits.concat(numbers, names);

// slice
names.slice(0, 2); // indexes 0 and 1

// splice
names.splice(0, 2, "alexie", "quincy", "kenya"); // remove the first two names starting at 0 index and insert the given names

// fill
const names2 = [...names];
names2.fill("joan"); // replace everything in the given array with the specified value
names2.fill("edgar", 3); // replace everything with the given value starting at index 3

// findIndex - returns a -1 if the value is not found and the index of the value if the value is found
const quincyPosition = names.findIndex((name) => name === "quincy");
// console.log(quincyPosition);
// console.log(names.indexOf("quincy"));

// Flat
const nums = [1, 2, [3, 4, [5, 6]], 7, 8];
// console.log(nums.flat()); // set the array into flat, i.e. nmake it one array with no sub arrays
// console.log(nums.flat(2)); // change the depth of the flat operation

// reverse
numbers.reverse();
// console.log(numbers);

// sort
const new_Numbers = [3, 2, 1, 5, 4, 10, 11];
new_Numbers.sort((a, b) => a - b); // sort in ascending order
new_Numbers.sort((a, b) => b - a); // sort in descending order
// console.log(new_Numbers);
// console.log(names.sort());
