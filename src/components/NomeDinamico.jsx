import { useState } from "react";

function NomeDinamico(){
    const [nome , setNome] = useState("")

    return (
        <div>
            <input type="text" 
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome" />

            <p>Olá, {nome}</p>

        </div>
    )
}
export default NomeDinamico