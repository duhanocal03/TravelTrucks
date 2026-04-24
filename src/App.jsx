import { useState } from 'react'
import './App.css'
import AppRouter from "./router/AppRouter"
import Navbar from "./components/layout/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App
