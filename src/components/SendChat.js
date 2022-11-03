import React, {useState, useContext} from 'react';
import { ChatContext } from '../context/ChatContext';

const AddChat = () => {
    const [message, setMessage] = useState('');

    const [chats, setChat] = useContext(ChatContext);

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    const addChat = (e) => {
        e.preventDefault();

        if(message.trim().length){
            addChatToHistory(message,"outgoing")
        }   
       
    }
    
    const addChatToHistory = (message, type) => {
        setChat(previousChat => [...previousChat, {message:message, type:type}]);
        setMessage('')
        console.log("ZZZ SendChat chats:", [...chats, {message:message, type: type}].length)
    }

    return (
        <form onSubmit={addChat}>
        <div class="textArea">
            <textarea aria-label={"Input message here"} placeholder="How can we help you?" value={message} onChange={updateMessage} />
            <button aria-label="Send Message"><span class="material-symbols-outlined iconSend">send</span></button>
        </div>
        </form>
    )
}

export default AddChat;