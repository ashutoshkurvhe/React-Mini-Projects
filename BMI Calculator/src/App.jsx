import React, { useState } from 'react'
import { AppName } from './Components/AppName' 
import UserInputs from './Components/UserInputs'
import './App.css'
  
const App = () => {

  return (
    <div className="container">
      <AppName></AppName>     
      <UserInputs></UserInputs>
    </div>
  )
}

export default App;
