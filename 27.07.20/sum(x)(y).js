function sum(x) {
    return function(y) {
        return x+y;
    }
}

alert(sum(1)(2));