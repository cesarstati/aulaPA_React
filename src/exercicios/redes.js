const redes = ["github", "linkedin", "instagram"]
const web = ["https://www.github.com", "https://www.linkedin.com", "https://www.instagram.com"]

const http = redes.map(rede => {
    return `http://www.${rede}.com`
})

console.log(http)