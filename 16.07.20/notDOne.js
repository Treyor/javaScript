// function pushToArray(array, ...item) {
//     for (let index = 0; index < item.length; index++) {
//         if (typeof arr[index] === "undefined" || NaN || null) {
//             array.push(item)
//         }
//         console.log(typeof item[index]);
//     }
//     return array;
// } 

// let arr = [];
// pushToArray(arr, 1,"check",NaN,4,null,undefined);
// console.log(arr);

let arr = [1, "2", true, Infinity, null, NaN, undefined, function(){}, 11.23]

for (let i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
        alert(arr[i])
        console.log(typeof(arr[i]));
    }

}


function chunk(array, size, guard) {
    if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
      size = 1;
    } else {
      size = nativeMax(toInteger(size), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
      return [];
    }
    var index = 0,
        resIndex = 0,
        result = Array(nativeCeil(length / size));

    while (index < length) {
      result[resIndex++] = baseSlice(array, index, (index += size));
    }
    return result;
  }