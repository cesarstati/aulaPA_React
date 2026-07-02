import { useState } from "react";//import useState

function App(){//adicionar quantidade ao item do pedido
  
const [quantidade,setQuantidade] = useState(0)

    return (
      <div>
        <h1>X-Burguer</h1>
        <h2>Quantidade {quantidade}</h2>

        <button onClick={() => setQuantidade(quantidade + 1)}>
          Adicionar
        </button>

      </div>
    )

}
export default App