let user = {
    name: 'John',
    age: 30
  };

  function count(object) {
    return (Object.keys(object).length)
}
  alert( count(user) ); // 2