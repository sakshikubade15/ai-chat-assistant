const executeTool = require("./toolManager/toolManager");

const result = executeTool("calculator", {
  operation: "multiply",
  num1: 10,
  num2: 20,
});

console.log(result);