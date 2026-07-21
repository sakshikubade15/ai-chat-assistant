const calculator = require("../tools/calculatorTool");

function executeTool(toolName, args) {

    switch (toolName) {

        case "calculator":

            return calculator(
                args.operation,
                args.num1,
                args.num2
            );

        default:

            return "Tool not found";
    }

}

module.exports = executeTool;