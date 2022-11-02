import React, {useContext} from 'react';
import Chat from './Chat'
import {ChatContext} from '../context/ChatContext'

const ChatList = () => {
    const [chats] = useContext(ChatContext)

    return(
        <div className="chat" aria-live="polite" role="log" aria-label="Chat History">
        {chats.map(chat => (
           <Chat responsetype={chat.type} message={chat.message} key={chat.id}/>
        ))}
        </div>
    );
}

export default ChatList;