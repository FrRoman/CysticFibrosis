import React, {useReducer} from "react";
import {MessageContext} from './messageContext';
import {messageReducer} from "./messageReducer";


export const MessageState = ({children}) => {

    const initialState = {
        messages: [{id:'1', title: 'Here you receive info if you are near to another Infected person'}]
    }

    const [state, dispatch] = useReducer(messageReducer, initialState)

    return <MessageContext.Provider
        value={{
            messages: state.messages
    }}
    >
        {children}
    </MessageContext.Provider>
}
