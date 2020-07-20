let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    
    console.log(arr);
    return Array.from(new Set(arr));
  }


alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"