import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const name = 'Besant Technologies'


  return (
    <>
      <h1 className="box">React App</h1>

      <h2>Welcome to {name.toUpperCase()}</h2>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />
    </>
  );
}

export default App
