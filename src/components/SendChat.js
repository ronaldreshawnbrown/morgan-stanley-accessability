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
        setChat(previousChat => [...previousChat, {message:message}]);
    }

    return (
        <div class="textArea">
        <form onSubmit={addChat}>
            <textarea aria-label="Input message here" placeholder="How can we help you?" value={message} onChange={updateMessage} />
            <button aria-label="Send Message"><span class="material-symbols-outlined iconSend">send</span></button>
        </form>
        </div>
    )
}

export default AddChat;