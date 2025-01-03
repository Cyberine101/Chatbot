import { useState, useEffect } from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const response = await fetch("http://127.0.0.1:5000/retrieve");
    const data = await response.json();
    console.log(data.store);
    setMessages(data.store);
  }
  console.log(messages)
  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm />
    </div>
  );
}

export default App;
