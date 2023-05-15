import './style-session.css'
import React from 'react'
import { useSessions } from '../hooks/sessions'
import { IMessage } from '../hooks/sessions'

export function Session() {

    const {changeHandler,handleSubmit, valueMessage}=useSessions()
    const savedUserName = sessionStorage.key(0)
    const savedRoom =  sessionStorage.getItem(String(savedUserName))
    const messagesJSON = localStorage.getItem(String(savedRoom))
    const messages = messagesJSON ? JSON.parse(messagesJSON) : [] 
   
    return(
        <>
        <div className='wrapper-session'>
            <header> <span className='room-number'>Комната #{savedRoom}</span></header>
            <section  className='messages'>
            <>
                {messages.length === 0 ? (<div className='no-messages'>Здесь пока ничего нет...</div>) : 
                (
                    <>
                        {messages.map((message: IMessage) => (
                            <div className='user-id' key={message.id}>{message.userName}
                                <div className="message">{message.value}</div>
                            </div>
                        ))}
                    </>
                )}
            </> 
            </section>
            <section className='entry-field'>
                    <input type='text' id='text' name='text' className='text' value={valueMessage}
                        onChange={changeHandler}
                        placeholder='Написать сообщение...'/>
                    <button onClick={handleSubmit}>
                        <svg fill="#000000" width="70px" height="70px" viewBox="0 0 15 15" version="1.1" id="circle"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" fill="#3499EC"/>
                        </svg>
                        <svg version="1.1" id="send" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 490 490">
                         <g><path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" fill="white"/></g>
                        </svg>
                    </button> 
            </section>
        </div>
        </>
    )
}

