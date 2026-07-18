import { useState } from "react";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import InputBox from "./components/InputBox";
import API from "./services/api";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

 async function sendMessage() {
  if (loading) return;
  if (message.trim() === "") return;

  try {
    // Create conversation including new user message
const updatedMessages = [
  ...messages,
  {
    role: "user",
    content: message,
  },
];
setLoading(true);
// Send complete conversation
const response = await API.post("/api/chat", {
  messages: updatedMessages,
});

    setMessages([
  ...updatedMessages,
  {
    role: "assistant",
    content: response.data.reply,
  },
]);
setLoading(false);

    setMessage("");

  } catch (error) {

  console.error(error);

  setMessages([
    ...messages,
    {
      role: "assistant",
      content: "❌ Sorry! Something went wrong. Please try again.",
    },
  ]);

  setLoading(false);
}
}
  return (
    <div>
      <Header title="AI Chat Assistant" />

      <ChatArea
    messages={messages}
    loading={loading}
/>

      <InputBox
    message={message}
    setMessage={setMessage}
    sendMessage={sendMessage}
    loading={loading}
/>
    </div>
  );
}

export default App;