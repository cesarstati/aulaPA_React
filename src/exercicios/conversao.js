const precosString = ["R$ 10.00", "R$ 25.50", "R$ 75.90"]

const precoNumeros = precosString.map( item => {
    const textoLimpo = item.replace("R$ ","")

    const numero = parseFloat(textoLimpo)

    return numero
})

console.log(precoNumeros)
