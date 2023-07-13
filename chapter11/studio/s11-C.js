//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
function findMaxValue(arr){
  let max = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
function sortedAscendingArray(arr){
  let newArray = [];
  let tempArr = arr.map(identity);
  while(tempArr.length > 0){
    let temp = findMinValue(tempArr);
    newArray.push(findMinValue(tempArr))
    tempArr.splice(tempArr.indexOf(temp),1)
    
  }

  return newArray
}

function sortedDescendingArray(arr){
  let testArray = [];
  let tempArr = arr.map(identity);
  while(tempArr.length > 0){
    let temp = findMaxValue(tempArr);
    testArray.push(findMaxValue(tempArr))
    tempArr.splice(tempArr.indexOf(temp),1)
    
  }

  return testArray
}
function identity(n) {
  return n;
  }
  // newArray = array.map(identity);
//Sort each array in decending order.


console.log(sortedAscendingArray(nums3))
// nums1 = [5, 10, 2, 42];
// nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
// nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(sortedDescendingArray(nums3))

