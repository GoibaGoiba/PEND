console.log("FUNÇÕES NATIVAS")

//Funções de Data e Hora!

function mostrarDataHora(){
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth());
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
}
mostrarDataHora();

function momentoAtual(){
    let agora = new Date();
    
    console.log(agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds() + "  " + agora.getDate() + "/" + (agora.getMonth()+1) + "/"  + agora.getFullYear());
}
momentoAtual(); 

//Funções Matemáticas!

console.log(Math.PI);

function calcularOperacoes(numero){
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Arredondando para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("Quadrado:", Math.pow(numero,2));
    console.log("Valor absoluto:", Math.abs(numero));
}
calcularOperacoes(7.8);

//Funções de String!

function analisarTexto(texto){
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");

function confirmaSeIncluiNoTexto(frase){
    console.log(frase.includes("JavaScript"));
}
confirmaSeIncluiNoTexto("Eu estudo JavaScript");

function adicionaAVariavelNoTexto(nome, curso){
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(adicionaAVariavelNoTexto("José", "Front-End"));

//Atividade sobre Funções

function horaAtual(){
    let tempo = new Date()
    console.log(tempo.getHours() + ":" + tempo.getMinutes());
}

horaAtual();

function somaMedia() {
    let a = prompt("Digite o primeiro número:");
    let b = prompt("Digite o segundo número:");

    let n1 = Number(a);
    let n2 = Number(b);

    let resultSoma = n1 + n2;
    let media = resultSoma / 2;
    return {
        resultSoma, 
        media
    };
}

console.log(somaMedia());

function nome(){
    let nom = prompt("Digite seu nome:");
    let nomMai = nom.toUpperCase();
    let nomQTD = nom.length;
    console.log("Seu nome é " + nom + " e ele tem " + nomQTD + " caracteres, esse é seu nome todo maiúsculo, " + nomMai)
}

nome();

function contemHTML(){
    let phrase = prompt("Escreve uma frase curta: ");
     if (phrase.toLowerCase().includes("html")){
        console.log("A frase fala sobre HTML! Boa escolha.");
    } else {
        console.log("A frase não menciona HTML.");
    }
}
contemHTML();