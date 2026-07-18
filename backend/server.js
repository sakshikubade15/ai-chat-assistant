// Load environment variables from .env
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    // Get message from frontend
const { messages } = req.body;
    // Check if message is empty
    if (!messages || messages.length === 0) {
  return res.status(400).json({
    error: "Messages are required",
  });
}

    // Send message to Groq
    const chatCompletion =
await groq.chat.completions.create({

   messages,

   model:"llama-3.1-8b-instant"

});
    // Extract AI response
    const reply = chatCompletion.choices[0].message.content;

    // Send response back to frontend
    res.json({
      reply,
    });

  }catch (error) {

  console.error("Groq Error:", error);

  res.status(500).json({
    error: "Failed to generate AI response",
  });

}
});

// Start Server
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});