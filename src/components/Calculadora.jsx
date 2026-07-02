import { useState } from "react";
import './Calculadora.css'

function Calculadora() {

  const [qtdBurger, setQtdBurger] = useState(0);
  const [qtdRefri, setQtdRefri] = useState(0);

  const precoBurger = 25.00;
  const precoRefri = 8.00;

  const total = (qtdBurger * precoBurger) + (qtdRefri * precoRefri);

  return (
    <div className="container">
<h1>Calculadora de Pedidos</h1>

      <hr />

      <p>X-Burger - R$ {precoBurger.toFixed(2)}</p>

      <button onClick={() => {
        if (qtdBurger > 0){
            setQtdBurger(qtdBurger - 1)
        }
        }
        }
        >
        -
      </button>

      <span> {qtdBurger} </span>

      <button onClick={() => setQtdBurger(qtdBurger + 1)}>
        +
      </button>

      <hr />

      <p>Refrigerante - R$ {precoRefri.toFixed(2)}</p>

      <button onClick={() => {
      
      if (qtdRefri > 0){
        setQtdRefri(qtdRefri - 1)

            }
        }
      } 
        >
        -
      </button>

      <span> {qtdRefri} </span>

      <button onClick={() => setQtdRefri(qtdRefri + 1)}>
        +
      </button>

      <hr />

      <h1>
        Total: R$ {total.toFixed(2)}
      </h1>

    </div>
      

    
  );
}

export default Calculadora;