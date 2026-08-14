function Carrinho(){

    return (
        <>
        <h2>🛒 Carrinho de Compras</h2>

    <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>Foto</th>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Qtde</th>
                <th>Preço</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>🍔</td>
                <td>X-Burguer</td>
                <td>Lanches</td>
                <td>2</td>
                <td>R$ 36,00</td>
            </tr>

            <tr>
                <td>🥤</td>
                <td>Refrigerante</td>
                <td>Bebidas</td>
                <td>1</td>
                <td>R$ 8,00</td>
            </tr>

            <tr>
                <td>🍟</td>
                <td>Batata Frita</td>
                <td>Porções</td>
                <td>3</td>
                <td>R$ 30,00</td>
            </tr>
        </tbody>
    </table>

    <hr />

    <p><strong>Total de itens:</strong> 6</p>

    <p><strong>Valor Total:</strong> R$ 74,00</p>

    <button>Limpar Carrinho</button>
    <button>Finalizar Pedido</button>


        </>
    )
}
export default Carrinho