import React, {useState} from 'react'

function generateID(){
   let userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
   return userId
}

export function useForms(){

    const handleSubmitForm = (event: React.FormEvent<HTMLButtonElement>) => {
         if (valueLogin.trim().length===0){
            setErrorLogin('true')
            event.preventDefault();
         }
         if(!(valueLogin.trim().length===0)){
            setErrorLogin('')
            event.preventDefault();
         }
         if (valueRoom.trim().length===0){
            setErrorRoom('true')
            event.preventDefault();
         }
         if (!(valueRoom.trim().length===0)){
            setErrorRoom('')
            event.preventDefault();
         }
         if ((!(valueLogin.trim().length===0))&&(!(valueRoom.trim().length===0))){
            setErrorLogin('')
            setErrorLogin('')
            if (!localStorage.getItem(valueLogin)) {
               let userId=generateID()
               localStorage.setItem( valueLogin, userId);
               localStorage.setItem(userId, valueRoom);
               localStorage.setItem(valueRoom, '');
            }
            sessionStorage.clear()
            sessionStorage.setItem( valueLogin, valueRoom)
            
            window.open(`/chat/:${valueRoom}`, '_blank')
            event.preventDefault()
         }
         
       };

    const [errorLogin,setErrorLogin]=useState('')
    const [errorRoom,setErrorRoom]=useState('')


    const changeHandlerLogin = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValueLogin((event.target as HTMLInputElement).value)
    }
    const [valueLogin, setValueLogin] =useState('')

    const changeHandlerRoom = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValueRoom((event.target as HTMLInputElement).value)
    }
    const [valueRoom, setValueRoom] =useState('')
  
    return {valueLogin, valueRoom, changeHandlerLogin,changeHandlerRoom, handleSubmitForm, errorLogin,errorRoom}
}