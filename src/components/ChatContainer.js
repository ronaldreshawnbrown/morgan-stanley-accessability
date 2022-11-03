import React, {useEffect, useContext, useRef} from "react";
import { ChatContext } from '../context/ChatContext';

import ChatHistory from '../components/ChatHistory';
import SendChat from '../components/SendChat';

function ChatContainer() {
  const [chats, setChat] = useContext(ChatContext);
  const chatInitiated = useRef(false);

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
            <header class="titleBar" aria-label="header">
                Chat
                <span tabIndex={0} aria-label="Close" className="material-symbols-outlined icon">close</span>
            </header>

            <ChatHistory />

      </div>

      <SendChat />

    </div>
  );
}

export default ChatContainer;
