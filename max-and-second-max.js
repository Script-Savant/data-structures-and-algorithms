// ques 1 - second largest number
// given an array Arr of size N, print second largest distinct element from an array

// input : [12, 35, 1, 10, 34, 1] >>>> output: 34
// input : [10, 5, 10]  >>>> output: 5

// my  solution
function secondLargest(arr) {
  arr = arr.sort((a, b) => a - b);

  console.log(arr);

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }

  return newArr[newArr.length - 2];
}

let testPar = [12, 35, 1, 10, 34, 1];

console.log(secondLargest(testPar));
console.log(secondLargest([10, 5, 10]));
