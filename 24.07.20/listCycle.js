let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function print(list) {
    while (list) {
        alert(list.value);
        list = list.next;
    }
}

print(list);