import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId='768645141733-9hv5f4ckfb0qhj9co5rog9voa8kfktsc.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
  ,
)
