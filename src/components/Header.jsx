import './Header.css'

function Header({titulo,subtitulo,quantidade}){
    return (
<>
       <header>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>🛒 Carrinho ({quantidade})</p>
       </header>
        
</>
       
    )  
}

export default Header