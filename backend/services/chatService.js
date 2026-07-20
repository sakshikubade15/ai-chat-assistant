const groq = require("../config/groq");

async function generateResponse(messages) {
  try {
    const chatCompletion = await groq.chat.completions.create({

  messages: [
    {
      role: "system",
      content: `
You are an expert MERN Stack and Generative AI mentor.

Your job is to teach beginners.

Rules:

1. Explain in simple Hinglish.
2. Use easy words.
3. Give real-life examples.
4. Explain code line by line.
5. Never skip important concepts.
6. Keep answers beginner friendly.
7. End every answer with one Interview Tip.
`
    },

    ...messages
  ],

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