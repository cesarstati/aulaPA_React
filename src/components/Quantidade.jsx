import { useState } from "react";

function Quantidade(){
    const [quantidade, setQuantidade] = useState(0)

    return (
        <div>
            <h1>X - Burguer </h1>
            <p>Quantidade {quantidade}</p>
                <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
                <button onClick={() => {

                    if (quantidade > 0) {
                            setQuantidade(quantidade - 1)}

                }
                    
                    }>Diminuir</button>
                    
                    
                    
                    
        </div>

    )
}
export default Quantidade