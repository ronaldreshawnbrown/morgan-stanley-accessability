import React, {useState, createContext} from 'react';

export const ChatContext = createContext();

export const ChatProvider = (props) => {
    const [chat, setChat] = useState([
        {
            type:"incoming",
            message: "Hi, Let us know how we can help and we'll get someone connected to you right away",
            id: 1
        }
    ]);
    return (
        <ChatContext.Provider value={[chat, setChat]}>
            {props.children}
        </ChatContext.Provider>
    )
}