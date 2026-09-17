// hB1D70a2ic7WupQhRPyNu1MEWaSuHfQtdZG7CuKb CHAVE DO API DA NASA

const botao = document.getElementById("botao");
const url = "https://science.nasa.gov/wp-json/wp/v2/apod-basic?api_key=hB1D70a2ic7WupQhRPyNu1MEWaSuHfQtdZG7CuKb";

botao.addEventListener("click", async () => {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        resultado.innerHTML = "";
        dados.forEach(noticia => {
            console.log(noticia);
            resultado.innerHTML += `
            <p><strong>${noticia.date}</strong><br><h1>${noticia.title}</h1></p><br><img src="${noticia.hdurl}"><h2>${noticia.explanation}<h2><br></p></p><hr>`;
        });
    } catch (erro) {
        resultado.innerHTML = "<p>Erro ao buscar as notícias</p>";
        console.log("Erro:", erro);
    }
})