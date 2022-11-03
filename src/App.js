import './App.css';
import React, {useState, useEffect, useRef} from "react";

import ChatContainer from '../src/components/ChatContainer';

function App() {
  const appStarted = useRef(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(()=>{
    if (appStarted.current) return;
    appStarted.current = true;

    console.log("ZZZ app started..")

  }, [])

  return (
    <div>
      {(!showChat)?(<button onClick={() => setShowChat(!showChat)} className='buttonPrimary'>Chat with support</button>):(<span></span>)}
      
      {(showChat)?(<ChatContainer />):(<span></span>)}
    </div>
    
  );
}

export default App;
