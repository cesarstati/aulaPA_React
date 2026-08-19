import CardProd from "../components/CardProd";
import Header from "../components/Header";
import Login from "../pages/Login";
import "../App.css";
import { useState } from "react";
import Carrinho from "../components/Carrinho";
import { useNavigate } from "react-router-dom";


function Home (){
const [carrinho,setCarrinho] = useState([])// é um array agora, não item isolado
  function adicionarCarrinho(produto){
    setCarrinho([...carrinho,produto])
  }

   const lanches = [
        {id:1, nome: 'X-salada', preco: '15,50',categoria:'lanche' , imagem: "/images/salada.jpg"},
        {id:2, nome: 'X-burguer', preco: '17,50', categoria:'lanche' ,imagem: "/images/burguer.jpg"},
        {id:3, nome: 'Fanta Uva',preco: '5,50', categoria:'Bebida' ,imagem: "/images/fanta_uva.webp"},
        {id:4, nome: 'Coca Cola',preco: '5,50', categoria:'Bebida' ,imagem: "/images/coca_cola.jpeg"},  
        {id:5, nome: 'Fanta Laranja',preco: '5,50', categoria:'Bebida' ,imagem: "/images/fanta_laranja.webp"},  
        {id:6, nome: 'X-egg',preco: '12,00', categoria:'lanche' ,imagem: "/images/x-egg.jpg"},  
        {id:7, nome: 'X-tudo',preco: '18,50', categoria:'lanche' ,imagem: "/images/x-tudo.jpg"},  
        {id:8, nome: 'Água com gás',preco: '3,50',categoria:'Bebida' , imagem: "/images/agua_gas.jpg"}, 
        ]

        const usuario = localStorage.getItem("usuario");
        const navigate = useNavigate();

        function sair() {
          localStorage.removeItem("usuario");
          navigate('/');
        }
       
return (
    <>
    
    <Header titulo="Sistema para lanchonete"
            subtitulo = "O melhor da Região" 
            quantidade = {carrinho.length}//antes {quantidade}. Agora carrinho é uma array (lista de itens)
            />
           <p>Usuário: {usuario}</p>
      <div className="lista_cards">
        
        {
          lanches.map(lanche => (
            <CardProd 
            key = {lanche.id}
            nome={lanche.nome}
            preco={lanche.preco}
            categoria={lanche.categoria}
            imagem={lanche.imagem}
            onAdicionarCarrinho={adicionarCarrinho}
            />
          )
          )
        }      
      </div>

        {/* <Carrinho itens={carrinho}/> */}

      {/* <div className="lista_cards">
        
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
          
      </div>     */}
    
    {/* <Contador /> */}   
    {/* <NomeDinamico /> */}
    {/* <Quantidade /> */}
    {/* <Calculadora /> */}
    {/* <Lista /> */}   
    
    </>
)

}

export default Home