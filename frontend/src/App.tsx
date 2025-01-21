import { useState, useEffect, useRef } from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import Login from './Login';

function App() {
  const [messages, setMessages] = useState([]);
  const [loginVisible, setLoginVisible] = useState<boolean>(true);

  useEffect(() => {
    deleteMessages();
    retrieveMessages();
  }, []);

  async function retrieveMessages() {
    const response = await fetch("http://127.0.0.1:5000/retrieve");
    const data = await response.json();
    setMessages(data.store);
  }

  async function deleteMessages() {
    const options = {
      method: "DELETE",
    }

    const response = await fetch("http://127.0.0.1:5000/deleteAll", options);
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <div className="App">
    {!loginVisible &&
      <div >
        <MessageList messages={messages} />
        <MessageForm />
      </div>
    }
    {loginVisible &&
     <Login setLoginVisible={setLoginVisible}/>
    }
    </div>
  );
}

export default App;
