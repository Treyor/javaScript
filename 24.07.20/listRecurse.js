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
    alert (list.value)
    if (list.next != null) {
        print(list.next);
    }
}

print(list)