//calculator
const calculator = (a, b, operation) => {
  console.log(`Calculating: ${a} ${operation} ${b}`);
  switch (operation) {
    case "add":
      return console.log(a + b);
    case "subtract":
      return console.log(a - b);
    case "multiply":
      return console.log(a * b);
    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return console.log(a / b);
    default:
      throw new Error("Invalid operation");
  }
};

export default calculator;
