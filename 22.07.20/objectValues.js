let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(object) {
    let sum = 0;
    for (let item of Object.values(object)) { 
      sum += item;
    }
    return(sum);
  }
  
  
  alert( sumSalaries(salaries) ); // 650