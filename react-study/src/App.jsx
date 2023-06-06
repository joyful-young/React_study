import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const ChildComp = () => {
  return <div>child component</div>
};


function App() {
  return (
    <>
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </>
  )
}

export default App
