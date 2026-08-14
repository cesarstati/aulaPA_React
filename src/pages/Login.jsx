import './Login.css'
import { useNavigate} from "react-router-dom"

function Login(){
    const navigate = useNavigate();

    function entrar () {
        // lógica de autenticação aqui
      localStorage.setItem("usuario", "Stati"); // Simulando um usuário logado
        navigate('/home');
    }

    return (
        <>
        <section className="login-container">
            <h2>Login</h2>
                <input type="text" placeholder='Usuário'/>
                <input type="password" placeholder='Senha'/>
            <button onClick={entrar}>Enviar</button>
            
            <p>Esqueceu a senha?</p>
            

        </section>
        
        
        </>
        
    )
}

export default Login