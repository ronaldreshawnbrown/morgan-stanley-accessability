import './App.css';
import React, {useEffect} from "react";

import ChatHistory from '../src/components/ChatHistory';
import SendChat from '../src/components/SendChat';

function App() {

useEffect(()=>{

  console.log("ZZZ chat started")
}, [])

  return (
    <div className="chatWindowContainer">
     
     <div class="chatWindow">
          <div class="titleBar" aria-label="header">
              Chat
              <span aria-label="Close" class="material-symbols-outlined icon">close</span>
          </div>

          <ChatHistory />

      </div>

      <SendChat />

    </div>
  );
}

export default App;
