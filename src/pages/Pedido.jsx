import Header from "../components/Header";
import "./Pedido.css";

function Pedido() {

    const perfil = localStorage.getItem("perfil");
    const usuario = localStorage.getItem("usuario");

    if (perfil !== "cozinha") {
        return (
            <>
                <h1>Acesso não autorizado</h1>
                <p>Esta página é exclusiva da cozinha.</p>
                <p>Perfil atual: {perfil}</p>
            </>
        );
    }

    return (
        <>
            <Header
                titulo="Sistema para lanchonete"
                subtitulo="O melhor da Região"
                quantidade={0}
            />

            <div className="pedidos">

                <h1>👨‍🍳 Pedidos da Cozinha</h1>

                <p>Usuário: {usuario}</p>

                <div className="pedido">
                    <h2>Pedido #001</h2>

                    <p>🍔 2x X-Burguer</p>
                    <p>🍟 1x Batata Frita</p>
                    <p>🥤 2x Coca-Cola</p>

                    <p>Status: Preparando</p>

                    <button>
                        Pedido Pronto
                    </button>
                </div>

            </div>
        </>
    );
}

export default Pedido;