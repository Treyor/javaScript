let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(array) {
    let map = new Map();
    for (let item of array) {
        let sorted = item.toLowerCase().split("").sort().join("");
        map.set(sorted, item);
    }
    return Array.from(map.values());
}

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"