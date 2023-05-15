import React, {useState} from 'react'

export interface IMessage {
    id: number;
    value: string;
    userName: string;
  }

export function useSessions(){

    const savedUserName = String(sessionStorage.key(0))
    const savedRoom =  String(sessionStorage.getItem(String(savedUserName)))
    const messagesJSON = localStorage.getItem(String(savedRoom))
    const saveMessages = messagesJSON ? JSON.parse(messagesJSON) : [] 
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValueMessage((event.target as HTMLInputElement).value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        if (valueMessage.trim().length===0){  
           event.preventDefault();
       } 
        else{         
            const newMessage = { id: Date.now(), userName: savedUserName, value: valueMessage };
            saveMessages.push(newMessage);
            localStorage.setItem(savedRoom, JSON.stringify(saveMessages));
            setMessages([...messages, newMessage]);
        }       
        setValueMessage('')   
    }
    
    const [messages, setMessages] =  useState<IMessage[]>([])
    const [valueMessage, setValueMessage] = useState('')

    return {changeHandler,handleSubmit, valueMessage,messages}
}


