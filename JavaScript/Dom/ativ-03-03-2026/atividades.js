//Atividade 1

let azul = document.getElementById("azul");
azul.addEventListener("click", function () {
    let titulo = document.querySelector("#titulo");
    titulo.style.color = "blue";
});

let vermelho = document.getElementById("vermelho");
vermelho.addEventListener("click", function () {
    let titulo = document.querySelector("#titulo");
    titulo.style.color = "red";
});

let preto = document.getElementById("preto");
preto.addEventListener("click", function () {
    let titulo = document.querySelector("#titulo");
    titulo.style.color = "black";
});

//Atividade 2

let esconderInput = document.getElementById("inputEsconder");
let click = document.getElementById("esconder")

click.addEventListener("click", function hideInput() {
    esconderInput.classList.toggle("esconder");
});

//Atividade 3

let caracter = document.querySelector("#caracter");
let qtdCaracter = document.querySelector("#qtdCaracter");

caracter.addEventListener("input", function () {
    qtdCaracter.textContent = caracter.value.length;
    contadorCaracter.textContent = qtdCaracter;
});

//Atividade 4

let cliques = document.querySelector("#cliques");
let qtdCliques = document.querySelector("#qtdCliques");
let contadorCliques = 0;

cliques.addEventListener("click", function () {
    contadorCliques++;
    qtdCliques.textContent = contadorCliques;
});

//Atividade 5

let itemPAdicionar = document.getElementById("preLista");
let adiLista = document.getElementById("adicionarLista");
adiLista.addEventListener("click", function () {
    let novoItem = document.createElement("li");
    novoItem.textContent = itemPAdicionar.value
    document.getElementById("listaAdicao").appendChild(novoItem);
});

//Atividade 6 + Desafio Extra

let itemPRemover = document.getElementById("posLista");
let removerLista = document.getElementById("removerLista");
removerLista.addEventListener("click", function () {
    let novoItemSubLista = document.createElement("li");
    novoItemSubLista.textContent = itemPRemover.value
    document.getElementById("listaSub").appendChild(novoItemSubLista);
    novoItemSubLista.addEventListener("click", function removerItem() {
        let confirmacao = prompt("Escreva 'CONFIRMAR' para deletar o item")
        if (confirmacao.toUpperCase().includes("CONFIRMAR")) {
            document.getElementById("listaSub").removeChild(novoItemSubLista);
        }
    });
});

//Desafio HARD

let campoValidar = document.getElementById("nomeValidar");
let botaoValidar = document.getElementById("enviarValidacao");
let resultadoValidacao = document.getElementById("resultadoValidacao");
botaoValidar.addEventListener("click", function () {
    let campo = campoValidar.value;
    if (campo.trim() === "") {
        resultadoValidacao.innerHTML = "<p class='erro'>O campo nome é obrigatório</p>";
    } else {
        resultadoValidacao.innerHTML = "<p class='valido'>Nome enviado com sucesso!</p>";
    }
});

//Atividade 7

let campoEmail = document.getElementById("emailCampo");
let atualizarEmail = document.getElementById("emailValidar");
let emailResultado = document.getElementById("emailResultado");
atualizarEmail.addEventListener("click", function () {
    if ((!campoEmail.value.includes("@")) || (!campoEmail.value.includes("."))) {
        emailResultado.innerHTML = "<p class='erro'>Há um erro no email</p>";
    } else {
        emailResultado.innerHTML = "<p class='valido'>Email verificado com sucesso!</p>";
    }
});

//Atividade 8

let campoSenhas = document.getElementById("senhas");
let statusSenhas = document.getElementById("statusSenhas");

campoSenhas.addEventListener("input", function () {
    tamSenha = campoSenhas.value.length;
    if (tamSenha < 6) {
        statusSenhas.innerHTML = "<p class='erro'> Senha fraca...";
    } if (tamSenha >= 6 && tamSenha < 10) {
        statusSenhas.innerHTML = "<p class='aceitavel'> Senha aceitável.";
    } if (tamSenha > 10) {
        statusSenhas.innerHTML = "<p class='valido'> Senha forte!.";
    }
});

//Atividade 9

let emailValidacao = document.getElementById("emailValidacao");
let statusEmail = document.getElementById("statusEmail");
let senhaValidar = document.getElementById("senhaValidar");
let qualidadeSenha = document.getElementById("qualidadeSenha");
let confirmarLog = document.getElementById("confirmarLog");
let resulVal = document.getElementById("resulVal");

emailValidacao.addEventListener("input", function () {
    if ((!emailValidacao.value.includes("@")) || (!emailValidacao.value.includes("."))) {
        statusEmail.innerHTML = "<p class='erro'>Há um erro no email</p>";
    } else {
        statusEmail.innerHTML = "<p class='valido'>Email verificado com sucesso!</p>";
    }
});

senhaValidar.addEventListener("input", function () {
    let compriSenha = senhaValidar.value.length;
    if (compriSenha < 6) {
        qualidadeSenha.innerHTML = "<p class='erro'> Senha fraca...";
    } if (compriSenha >= 6 && compriSenha < 10) {
        qualidadeSenha.innerHTML = "<p class='aceitavel'> Senha aceitável.";
    } if (compriSenha > 10) {
        qualidadeSenha.innerHTML = "<p class='valido'> Senha forte!.";
    }
});
    
confirmarLog.addEventListener("click", function () {
    let compriSenha = senhaValidar.value.length;
    if (compriSenha < 6) {
        resulVal.innerHTML = "<p class='erro'> Não foi possível validar, senha fraca.";
    } if ((compriSenha >= 6) && (!emailValidacao.value.includes("@")) || (!emailValidacao.value.includes("."))) {
        resulVal.innerHTML = "<p class='erro'> Não foi possível validar, email  incorreto.";
    } if ((!emailValidacao.value.includes("@")) || (!emailValidacao.value.includes("."))) {
        resulVal.innerHTML = "<p class='erro'> Não foi possível validar, email incorreto.";
    } else if ((compriSenha < 6) && (!emailValidacao.value.includes("@")) || (!emailValidacao.value.includes("."))) {
        resulVal.innerHTML = "<p class='erro'> Não foi possível validar, email e senha incorretos.";
    } else {
        resulVal.innerHTML = "<p class='valido'> Validação efetuada.";
    }
});