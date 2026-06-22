import Botao from "./Botao"
import './Login.css'

function Login(){
    return (
        <>
        <section className="container">
            <h2>Login</h2>
            <form action="" className='formulario'>
                <input type="text" placeholder='Usuário'/>
                <input type="password" placeholder='Senha'/>
            </form>
            <p>Esqueceu a senha?</p>
            <Botao />

        </section>
        
        
        </>
        
    )
}

export default Login