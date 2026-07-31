function Lista(){

    const lanches = [
        {id:1,
        nome: 'x-salada',
        preco: 'R$ 15,50'
        },
        {id:2,
        nome: 'x-burguer',
        preco: 'R$ 17,50'
        },
        {id:3,
        nome: 'x-egg',
        preco: 'R$ 8,50'
        }  
    
    ]

    return (
        <>
        <p>Lista de lanches</p>

        {
        lanches.map(lanche => (
            <>
                <p key = {lanche.id}></p>
                <p> nome: {lanche.nome}</p>
                <p> preco: {lanche.preco}</p>

            </>
        )           
        )}
        
        
        </>
    )
}
export default Lista