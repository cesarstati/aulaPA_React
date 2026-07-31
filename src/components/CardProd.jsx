import './CardProd.css'

function CardProd({nome,preco,imagem}){
    return (
        <div className="card_prod">
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
        </div>
    )
}
export default CardProd