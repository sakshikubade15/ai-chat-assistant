const groq = require("../config/groq");

async function generateResponse(messages) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "llama-3.1-8b-instant",
    });

    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error("Service Error:", error);
    throw error;
  }
}

module.exports = {
  generateResponse,
};