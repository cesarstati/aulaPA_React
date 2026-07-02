import CardProd from "./components/CardProd";
import Header from "./components/Header";
import Login from "./components/Login";
import Funcionario from "./components/Funcionarios";
import Contador from "./components/Contador";
// import NomeDinamico from "./components/NomeDinamico";
import Quantidade from "./components/Quantidade";
import Calculadora from "./components/Calculadora";
import Lista from "./components/Lista";


function App(){
   const lanches = [
        {id:1, nome: 'X-salada', preco: 'R$ 15,50'},
        {id:2, nome: 'X-burguer', preco: 'R$ 17,50'},
        {id:3, nome: 'X-egg',preco: 'R$ 8,50'}  
        ]
  return (
    <> 
    
    <Header titulo="Sistema para lanchonete"
            subtitulo = "O melhor da Região" />
    <Login />

      <div className="lista_cards">
        
        {
          lanches.map(lanche => (
            <CardProd 
            key = {lanche.id}
            nome={lanche.nome}
            preco={lanche.preco}
            />
          )

          )
        }
        
          
      </div>
    

    <Funcionario nome = "João"
cargo = "Atendente" />


    <Contador />
    

    {/* <NomeDinamico /> */}

    <Quantidade />

    <Calculadora />
    

    </>
    
  )
}
export default App