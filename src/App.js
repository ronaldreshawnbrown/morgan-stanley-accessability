import './App.css';
import React, {useState, useEffect, useContext, useRef} from "react";
import { ChatContext } from '../src/context/ChatContext';

import ChatHistory from '../src/components/ChatHistory';
import SendChat from '../src/components/SendChat';

function App() {
  const [chats, setChat] = useContext(ChatContext);
  const chatInitiated = useRef(false);
  const [showChat, setShowChat] = useState(false);

useEffect(()=>{

  const newMessage =  {
    type:"incoming",
    message: "Hi, Let us know how we can help and we'll get someone connected to you right away"
  }

setTimeout(() => {
  sayHello(newMessage)
}, 2000)

  
const sayHello = (newMessage) =>{
  if (chatInitiated.current) return;
  chatInitiated.current = true;

  setChat(previousChat => [...previousChat, newMessage]); 
}

}, [chats,setChat])

  return (
    <div className="chatWindowContainer" aria-label="Chat Window">
     
      <div class="chatWindow">
            <div class="titleBar" aria-label="header">
                Chat
                <span tabIndex={0} aria-label="Close" class="material-symbols-outlined icon">close</span>
            </div>

            <ChatHistory />

      </div>

      <SendChat />

    </div>
  );
}

export default App;
