import React from 'react';
import { Form } from "./components/Form/Form";
import { Session } from './components/Session/Session';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const Room =  sessionStorage.getItem(String(sessionStorage.key(0)))

  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Form/>}/> 
          <Route path={`/chat/:${Room}`} element={<Session/>}/>
        </Routes>
        </div>
    </Router>
  )
}

export default App;
