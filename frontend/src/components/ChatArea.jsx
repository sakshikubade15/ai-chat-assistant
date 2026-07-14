function ChatArea({ messages }) {
  return (
    <div>
      <h3>Chat</h3>

      {messages.map((msg, index) => (
        <p key={index}>
          {msg.role === "user" ? "👤" : "🤖"} {msg.text}
        </p>
      ))}
    </div>
  );
}

export default ChatArea;