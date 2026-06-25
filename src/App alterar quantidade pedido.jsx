import { useState } from "react";//import useState

function App(){//adicionar quantidade ao item do pedido
  
const [quantidade,setQuantidade] = useState(0)

const preco_xburguer = 15.00

    return (
      <div>
        <h1>X-Burguer</h1>
        <h3>Preço R$ {preco_xburguer}</h3>
        <h3>Quantidade {quantidade}</h3>
        <h2>TOTAL: R$ {(quantidade * preco_xburguer).toFixed(2)}</h2>

        <button onClick={() => setQuantidade(quantidade + 1)}>
          Adicionar
        </button>

      </div>
    )

}
export default App