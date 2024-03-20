// import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Home from './container/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {REACT_APP_GOOGLE_API_TOKEN} from '../_env'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/*" element={<Home />} />
   </Routes>
    </GoogleOAuthProvider>
    
   
  )
}

export default App
