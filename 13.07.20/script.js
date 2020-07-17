function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // удалить, если за пределами интервала
      if (val < a || val > b) {
      arr.splice(i, 1);
      i--; // обязательно уменьшить счётчик
    }
  }
  
}


let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // удалены числа вне диапазона 1..4

alert( array ); // [3, 1]