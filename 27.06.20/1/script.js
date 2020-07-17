let calculator = {
    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    },

    read() {
        this.x = +prompt("Enter number", "0");
        this.y = +prompt("Enter number", "0");
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );