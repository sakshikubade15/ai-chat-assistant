function ChatArea({ messages, loading }) {
  return (
    <div>
      <h2>Chat</h2>

      {messages.map((msg, index) => (
        <p key={index}>
          {msg.role === "user" ? "👤" : "🤖"} {msg.content}
        </p>
      ))}

      {loading && <p>🤖 Thinking...</p>}
    </div>
  );
}

export default ChatArea;