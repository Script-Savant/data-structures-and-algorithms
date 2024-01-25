// quest 2 - rotate array by K
// given an integer array nums, rotate the array to the right by k steps, where k is a non negative number

// input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 >>> output: [5, 6, 7, 1, 2, 3, 4]
// input: nums = [-1, -100, 3, 99], k = 2 >>> output: [3, 99, -1, -100]

// [-1, -100, 3, 99] => [99, -1, -100, 3] => [3, 99, -1, -100] ---> this is how the rotation occurs

//solution 1
// function rotateArray(arr, k) {
//   let size = arr.length;

//   if (size > k) {
//     k = k % size;
//   }

//   const rotated = arr.splice(size - k, size);
//   arr.unshift(...rotated);

//   return arr;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// my solution
function rotateArray(arr, k) {
  let i = 1;
  while (i <= k) {
    let popped = arr.pop();
    arr.unshift(popped);
    i++;
  }

  return arr;
}

console.log(rotateArray([-1, -100, 3, 99], 2));
