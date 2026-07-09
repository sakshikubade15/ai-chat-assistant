
function InputBox({
  message,
  setMessage,
  sendMessage,
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

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default InputBox;