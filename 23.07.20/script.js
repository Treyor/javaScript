let number = 100;

function sumCycle(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumRecurse(n) {
    return (n == 1) ? 1 : n + sumRecurse(n - 1);
}

function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );

console.log(sumCycle(number));
console.log(sumRecurse(number));