import './App.css'
import {ConnectLogin} from "./components/login/connectLogin"
import {ConnectSignup} from "./components/signup/connectSignup"
import {ConnectLoading} from "./components/loading/connectLoading"
import {ToDoPlan} from  "./components/todoplan/toDoPlan"
import {ConnectLandingPage} from "./components/landing/connectLandingPage"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
function App() {


  return (
    <>
     <div className="min-h-screen w-full bg-gradient-to-br from-red-100 to-purple-200">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectSignup/>}/>
        <Route path="/login" element={<ConnectLogin/>}/>
        <Route path="/loading" element={<ConnectLoading/>}/>
        <Route path="/plan" element={<ToDoPlan/>}/>
        <Route path='/landing' element={<ConnectLandingPage/>}/>
     </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
