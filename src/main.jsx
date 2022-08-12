import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB_UgRlGzD2XUpnv6t413KOLIsBUDuz9eQ',
  authDomain: 'speakersramirez.firebaseapp.com',
  projectId: 'speakersramirez',
  storageBucket: 'speakersramirez.appspot.com',
  messagingSenderId: '582177226755',
  appId: '1:582177226755:web:14d307c72ef451fdd3ce36',
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
  </>,
  // </React.StrictMode>,
)
