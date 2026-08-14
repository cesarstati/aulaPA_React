import Header from "../components/Header";

function Pedido(){
    
    return (
        <>
        <Header
    titulo="Sistema para lanchonete"
    subtitulo="O melhor da Região"
    quantidade={0}
/>
        <h1>👨‍🍳 Pedidos da Cozinha</h1>

    <hr />

    <h2>Pedido #001</h2>

    <p><strong>Mesa:</strong> 03</p>
    <p><strong>Horário:</strong> 12:15</p>

    <hr />

    <ul>
        <li>2x X-Burguer</li>
        <li>1x Batata Frita</li>
        <li>2x Coca-Cola</li>
    </ul>

    <hr />

    <p><strong>Status:</strong></p>

    <button>Preparando</button>

        </>
    )
}
export default Pedido