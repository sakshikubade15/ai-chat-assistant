function ChatArea({ messages }) {
  return (
    <div>
      <p>🤖 Hello! I'm your AI Assistant.</p>

      {messages.map((msg, index) => (
        <p key={index}>
          👤 {msg}
        </p>
      ))}
    </div>
  );
}

export default ChatArea;