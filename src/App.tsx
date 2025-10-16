import './App.css'
import {ConnectLogin} from "./components/login/connectLogin"
import {ConnectSignup} from "./components/signup/connectSignup"
import {ConnectLoading} from "./components/loading/connectLoading"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
function App() {


  return (
    <>
     <div className="min-h-screen w-full bg-[#FAFBFD]">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectSignup/>}/>
        <Route path="/login" element={<ConnectLogin/>}/>
        <Route path="/loading" element={<ConnectLoading/>}/>
     </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
