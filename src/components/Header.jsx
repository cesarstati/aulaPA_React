import {Link} from "react-router-dom"
import './Header.css'


function Header({titulo,subtitulo,quantidade}){
    
 
     
    return (
<>
       <header>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>🛒 Carrinho ({quantidade})</p>
         
          

          
       </header>
       <nav className="menu">
            <Link to="/home">Home</Link>
            <Link to="/carrinho">Carrinho</Link>
            <Link to="/pedido">Pedido</Link>
            <Link to="/">Logout</Link>            
        </nav>
        
</>
       
    )  
}

export default Header