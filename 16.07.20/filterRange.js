function filterRange(arr, a, b) {
    return console.log(
        arr.filter(item => (item >= a && item <= b))
    )
}

filterRange([1,2,3,4,5,6,7,8,9], 3,6);