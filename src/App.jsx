import CardProd from "./components/CardProd";
import Header from "./components/Header";
import Login from "./components/Login";
import Funcionario from "./components/Funcionarios";
import Contador from "./components/Contador";


function App(){
  return (
    <> 
    
    <Header titulo="Sistema para lanchonete"
            subtitulo = "O melhor da Região" />
    <Login />

    <CardProd nome = "X-Burguer"
              preco= "15,90"
              />

    <CardProd nome = "X-Salada"
              preco= "17,90"
              />

    <CardProd nome = "Refrigerante"
              preco= "6,00"
              />

    <Funcionario nome = "João"
cargo = "Atendente" />


    <Contador />
    </>
    
  )
}
export default App