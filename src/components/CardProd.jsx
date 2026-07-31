import { useState } from 'react'
import './CardProd.css'

function CardProd({nome,preco,imagem}){
    const [quantidade,setQuantidade] = useState(1)
    return (
        <div className="card_prod">
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
            <button onClick={() => {
                if (quantidade > 0){
                    setQuantidade(quantidade - 1)

                }}}> - </button>
            <span>{quantidade}</span>
            <button onClick={() => setQuantidade(quantidade + 1)}> + </button>
<p className="adicionar">
    <button onClick={() =>alert(`${quantidade} ${nome} adicionado ao carrinho!`)}>Adicionar item</button>
</p>
        </div>
    )
}
export default CardProd