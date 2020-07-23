let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalaries(object) {
    
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(object)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}   

alert(topSalaries(salaries))