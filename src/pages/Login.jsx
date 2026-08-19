import './Login.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login(){
    
    const navegate = useNavigate()

    const [usuario, setUsuario] = useState("");//guarda o que foi digitado
    const [senha, setSenha] = useState("");//guarda a senha
    const [mensagem, setMensagem] = useState("");//mostra o resultado da validação

    function entrar (){
        navegate("/home")
    }

    

    return (
        <>
        <section className="login-container">
            <h2>Login</h2>
                <input type="text"  
                placeholder='Usuário' 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}/>
                
                <input 
                type="password"
                placeholder='Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}/>
            <button onClick={entrar}>Enviar</button>
            <p>{mensagem}</p>
            
            <p>Esqueceu a senha?</p>
            

        </section>
        
        
        </>
        
    )
}

export default Login