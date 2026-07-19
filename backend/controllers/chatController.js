const { generateResponse } = require("../services/chatService");

async function chat(req, res) {
  try {
    // Get messages from frontend
    const { messages } = req.body;

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