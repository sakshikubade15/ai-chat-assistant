import { useState } from "react";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import InputBox from "./components/InputBox";
import API from "./services/api";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

 async function sendMessage() {
  if (message.trim() === "") return;

  try {
    const response = await API.post("/api/chat", {
      message: message,
    });

    setMessages([
      ...messages,
      {
        role: "user",
        text: message,
      },
      {
        role: "assistant",
        text: response.data.reply,
      },
    ]);

    setMessage("");

  } catch (error) {
    console.log(error);
  }
}
  return (
    <div>
      <Header title="AI Chat Assistant" />

      <ChatArea messages={messages} />

      <InputBox
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;