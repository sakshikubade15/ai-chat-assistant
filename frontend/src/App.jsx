import { useState } from "react";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import InputBox from "./components/InputBox";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (message.trim() === "") return;

    setMessages([...messages, message]);

    setMessage("");
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