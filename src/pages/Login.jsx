import './Login.css'
import { useNavigate} from "react-router-dom"
import { useState } from "react";

function Login(){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function entrar () {

        if(usuario === "admin" && senha === "123"){

            localStorage.setItem("usuario", usuario);
            navigate('/home');

        }

        else {
            alert("Usuário ou senha inválidos");
        }


         }

    return (
        <>
        <section className="login-container">
            <h2>Login</h2>
                <input type="text" value= {usuario} onChange={(e) => setUsuario(e.target.value)} placeholder='Usuário'/>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha'/>
            <button onClick={entrar}>Enviar</button>
            
            <p>Esqueceu a senha?</p>
            

        </section>
        
        
        </>
        
    )
}

export default Login