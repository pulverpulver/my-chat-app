import { BrowserRouter, Routes, Route } from "react-router-dom";

function Login(){
  return <div style={{color:"white"}}>Login Page</div>
}

function Chat(){
  return <div style={{color:"white"}}>Chat Page</div>
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}
