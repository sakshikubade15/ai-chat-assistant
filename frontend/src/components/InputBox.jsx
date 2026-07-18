function InputBox({
  message,
  setMessage,
  sendMessage,
  loading,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
      />

     <button
  onClick={sendMessage}
  disabled={loading}
>
  {loading ? "Thinking..." : "Send"}
</button>
    </div>
  );
}

export default InputBox;