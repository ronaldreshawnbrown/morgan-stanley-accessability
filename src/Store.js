import React from 'react';

import {ChatProvider} from './context/ChatContext'

const Store = ({children}) => {

    return (
        <ChatProvider>
            {children}
        </ChatProvider>
    )
  
}

export default Store;