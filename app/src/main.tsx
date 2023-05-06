import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.min.js'

// Custom CSS
import './styles/custom.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
