const Groq = require("groq-sdk");

const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});


const { generateResponse } = require("../services/chatService");
const executeTool = require("../toolManager/toolManager");
function isMathQuestion(message) {

    const operators = [
        "+",
        "-",
        "*",
        "/"
    ];

    return operators.some(op =>
        message.includes(op)
    );

}
function extractMathExpression(message) {

    const parts = message.split(" ");

    const num1 = Number(parts[0]);

    const operator = parts[1];

    const num2 = Number(parts[2]);

    let operation = "";

    switch (operator) {

        case "+":
            operation = "add";
            break;

        case "-":
            operation = "subtract";
            break;

        case "*":
            operation = "multiply";
            break;

        case "/":
            operation = "divide";
            break;

        default:
            operation = "";
    }

    return {

        operation,

        num1,

        num2

    };

}
async function chat(req, res) {
  try {
    // Get messages from frontend
    const { messages } = req.body;
    if (isMathQuestion(message)) {

    const args = extractMathExpression(message);

    const result = executeTool(
        "calculator",
        
        args
    );
    try {

    const response = await groq.chat.completions.create({

        messages: [

            {
                role: "user",
                content: message
            }

        ],

        model: "llama-3.3-70b-versatile"

    });

    return res.json({

        reply: response.choices[0].message.content

    });

}
catch (error) {

    console.log(error);

    return res.status(500).json({

        reply: "Something went wrong"

    });

}

    return res.json({

        reply: `The answer is ${result}`

    });

}

    // Validate input
    if (!messages || messages.length === 0) {
      return res.status(400).json({
        error: "Messages are required",
      });
    }

    // Call service
    const reply = await generateResponse(messages);

    // Send response
    res.json({
      reply,
    });

  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      error: "Failed to generate AI response",
    });
  }
}

module.exports = {
  chat,
};