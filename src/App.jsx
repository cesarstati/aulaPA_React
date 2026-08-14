import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Carrinho from "./pages/Carrinho"
import "./App.css"
import Pedido from "./pages/Pedido"



function App(){

  
  return (
    <> 
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="/carrinho" element={<Carrinho />} />
    <Route path="/pedido" element={<Pedido />} />

  </Routes>
    
     
    </>
    
  )
}
export default App