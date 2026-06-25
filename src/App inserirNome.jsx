import { useState } from "react";//import useState

function App(){//usar input
  const [nome, setNome] = useState("");
  return (
    <div>
      <input type="text"
              onChange={(e) => 
                setNome(e.target.value)
              }
      />

      <h2>Olá, {nome}</h2>


    </div>

  )


}
export default App