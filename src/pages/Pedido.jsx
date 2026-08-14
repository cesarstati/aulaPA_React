import Header from "../components/Header";
import './Pedido.css'

function Pedido(){
    
    return (
        <>
        <Header
    titulo="Sistema para lanchonete"
    subtitulo="O melhor da Região"
    quantidade={0}
/>
        <div className="pedidos">

            <h1>👨‍🍳 Pedidos da Cozinha</h1>

            <div className="pedido">

                <div className="pedido-header">

                    <h2>Pedido #001</h2>

                    <span className="pedido-numero">
                        Pedido recebido
                    </span>

                </div>


                <div className="pedido-info">

                    <p>
                        <strong>Mesa:</strong> 03
                    </p>

                    <p>
                        <strong>Horário:</strong> 12:15
                    </p>

                </div>


                <ul className="pedido-itens">

                    <li>🍔 2x X-Burguer</li>

                    <li>🍟 1x Batata Frita</li>

                    <li>🥤 2x Coca-Cola</li>

                </ul>


                <div className="pedido-status">

                    <strong>Status:</strong>

                    <span className="status-preparando">
                        Preparando
                    </span>

                </div>


                <button>
                    Pedido Pronto
                </button>

            </div>

        </div>

        </>
    )
}
export default Pedido