import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
  
      <main className="light text-foreground-300 bg-background-200">
        <App />
      </main>
   
  </React.StrictMode>,
)
