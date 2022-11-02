import React from 'react';

const Chat = ({responsetype, message}) => {
    return (
        <div aria-label="Chat message" className={`chatbox ${responsetype==='incoming'? 'incoming' : 'outgoing'}`}>{message} </div>
    )
}

export default Chat;