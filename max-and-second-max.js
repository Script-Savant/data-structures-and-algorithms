// ques 1 - second largest number
// given an array Arr of size N, print second largest distinct element from an array

// input : [12, 35, 1, 10, 34, 1] >>>> output: 34
// input : [10, 5, 10]  >>>> output: 5

// my  solution
// function secondLargest(arr) {
//   arr = arr.sort((a, b) => a - b);

//   console.log(arr);

//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr[newArr.length - 2];
// }

// let testPar = [12, 35, 1, 10, 34, 1];

// console.log(secondLargest(testPar));
// console.log(secondLargest([10, 5, 10]));

// solution 2
// sort the Array, derive a set from the Array(sets have unique numbers only), conert the set back to Array
// function secondLargest(arr) {
//   arr = arr.sort((a, b) => a - b);
//   const arrSet = new Set(arr);
//   arr = Array.from(arrSet);
//   arr.length >= 2
//     ? console.log(arr[arr.length - 2])
//     : console.log("Array has only one element");
// }

// secondLargest([6, 7, 10, 5, 4, 4]);
// secondLargest([2, 1]);

// solution 3
// assign two values, largest and secondLargest, to the least available number JS can hold
// Iterate over the array assigning largest to the highest number and secondLargest to the next in line
function SecondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(SecondLargestOptimized([1, 1, 3, 5, 5]));
