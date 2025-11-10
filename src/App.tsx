import './App.css'
import {ConnectLogin} from "./components/login/connectLogin"
import {ConnectSignup} from "./components/signup/connectSignup"
import {ConnectLoading} from "./components/loading/connectLoading"
import {ToDoPlan} from  "./components/todoplan/toDoPlan"
import {ConnectLandingPage} from "./components/landing/connectLandingPage"
import { ConnectLandingPagee } from './components/landing/connectLandingPagee'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
function App() {


  return (
    <>
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectSignup/>}/>
        <Route path="/login" element={<ConnectLogin/>}/>
        <Route path="/loading" element={<ConnectLoading/>}/>
        <Route path="/plan" element={<ToDoPlan/>}/>
        <Route path='/landing' element={<ConnectLandingPage/>}/>
        <Route path="/landingg" element={<ConnectLandingPagee/>}/>
     </Routes>
     </BrowserRouter>
   
    </>
  )
}

export default App
