function getMaxSubSum(array) {
    let partialSum = 0;
    let maxSum = 0;
    for (let item of array) {
        partialSum += item;
        maxSum = Math.max(partialSum, maxSum);
        if (partialSum < 0)
        partialSum = 0;
    }
    console.log(maxSum);
}

 getMaxSubSum([-1, 2, 3, -9])// = 5 (сумма выделенных)
 getMaxSubSum([2, -1, 2, 3, -9])// = 6
 getMaxSubSum([-1, 2, 3, -9, 11])// = 11
 getMaxSubSum([-2, -1, 1, 2])// = 3
 getMaxSubSum([100, -9, 2, -3, 5])// = 100
 getMaxSubSum([1, 2, 3])// = 6 (берём все)