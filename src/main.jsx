import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/1-Header/Header.jsx'
import Hero from './components/2-Hero/Hero.jsx'
import About from './components/3-About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero />
    <About />
    <App />
  </React.StrictMode>,
)
