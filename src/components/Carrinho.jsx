function Carrinho({itens}){

return(
    <div className="carrinho">
        <h2>🛒 Carrinho </h2>
        {
            itens.map((item,index) => (
                <div key={index}>
                    <p>{item.nome}</p>
                    <p>R$ {item.preco}</p>
                </div>
            ))
        }


    </div>
)


}

export default Carrinho