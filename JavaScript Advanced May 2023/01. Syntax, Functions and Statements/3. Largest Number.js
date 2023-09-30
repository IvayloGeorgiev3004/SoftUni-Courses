function largestNumber(arr1, arr2, arr3) {
  let maxNum = Math.max(arr1, arr2, arr3);
  console.log(`The largest number is ${maxNum}.`);
}
largestNumber(5, -3, 16);

function largestNumber(arr1, arr2, arr3) {
  let maxNumber = null;

  if ((arr1 > arr2) & (arr1 > arr3)) {
    maxNumber = arr1;
  } else if (arr2 > arr1 && arr2 > arr3) {
    maxNumber = arr2;
  } else {
    maxNumber = arr3;
  }

  console.log(`The largest number is ${maxNumber}.`);
}

largestNumber(5, -3, 16);
