
import CardProd from "./components/CardProd";
import Header from "./components/Header";
import Login from "./components/Login";
import Funcionario from "./components/Funcionarios";
import Contador from "./components/Contador";
// import NomeDinamico from "./components/NomeDinamico";
import Quantidade from "./components/Quantidade";
import Calculadora from "./components/Calculadora";
import Lista from "./components/Lista";
import "./App.css";


function App(){
   const lanches = [
        {id:1, nome: 'X-salada', preco: '15,50', imagem: "/images/salada.jpg"},
        {id:2, nome: 'X-burguer', preco: '17,50', imagem: "/images/burguer.jpg"},
        {id:3, nome: 'Fanta Uva',preco: '5,50', imagem: "/images/fanta_uva.webp"},
        {id:3, nome: 'Coca Cola',preco: '5,50', imagem: "/images/coca_cola.jpeg"},  
        {id:3, nome: 'Fanta Laranja',preco: '5,50', imagem: "/images/fanta_laranja.webp"},  
        {id:3, nome: 'X-egg',preco: '12,00', imagem: "/images/x-egg.jpg"},  
        {id:3, nome: 'X-tudo',preco: '18,50', imagem: "/images/x-tudo.jpg"},  
        {id:3, nome: 'Água com gás',preco: '3,50', imagem: "/images/agua_gas.jpg"}, 
        ]

    const funcionario = [
      {id:101, nome: "João Marcelo" , cargo: "Atendente"},
      {id:102, nome: "Daiana Jaguara" , cargo: "Gerente"},
      {id:103, nome: "Djalma Poperô" , cargo: "Atendente"},
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
            imagem={lanche.imagem}
            />
          )
          )
        }      
      </div>
      <div className="lista_cards">
        
        {
          funcionario.map(func => (
            <Funcionario 
            key = {func.id}
            nome={func.nome}
            cargo={func.cargo}
            />
          )

          )
        }       
          
      </div>    
    
    {/* <Contador /> */}   
    {/* <NomeDinamico /> */}
    {/* <Quantidade /> */}
    {/* <Calculadora /> */}
    {/* <Lista /> */}   
    </>
    
  )
}
export default App