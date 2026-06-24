import './Login.css'

function Login(){
    return (
        <>
        <section className="login-container">
            <h2>Login</h2>
                <input type="text" placeholder='Usuário'/>
                <input type="password" placeholder='Senha'/>
            <button>Enviar</button>
            
            <p>Esqueceu a senha?</p>
            

        </section>
        
        
        </>
        
    )
}

export default Login