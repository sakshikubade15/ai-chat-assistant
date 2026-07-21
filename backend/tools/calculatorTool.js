function calculator(operation, num1, num2) {

    switch (operation) {

        case "add":
            return num1 + num2;

        case "subtract":
            return num1 - num2;

        case "multiply":
            return num1 * num2;

        case "divide":

            if (num2 === 0) {
                return "Cannot divide by zero";
            }

            return num1 / num2;

        default:
            return "Invalid Operation";
    }

}

module.exports = calculator;