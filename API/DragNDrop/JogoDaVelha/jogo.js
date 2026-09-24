const espacos = document.querySelectorAll(".espaco");
const pecas = document.querySelectorAll(".pecaX, .pecaO");
const listaPecasX = document.querySelector("#pecasX .lista-pecas");
const listaPecasO = document.querySelector("#pecasO .lista-pecas");
const mensagem = document.querySelector("#mensagem");
const timerElemento = document.querySelector("#timer");
const botaoResetar = document.querySelector("#resetar");

const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let pecaArrastada = null;
let turnoAtual = "X";
let jogoEncerrado = false;
let segundos = 0;
let intervaloTimer;

function simboloDaPeca(peca) {
    return peca.classList.contains("pecaX") ? "X" : "O";
}

function atualizarTimer() {
    const minutos = String(Math.floor(segundos / 60)).padStart(2, "0");
    const segundosRestantes = String(segundos % 60).padStart(2, "0");
    timerElemento.textContent = `${minutos}:${segundosRestantes}`;
}

function iniciarTimer() {
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(() => {
        segundos += 1;
        atualizarTimer();
    }, 1000);
}

function pararTimer() {
    clearInterval(intervaloTimer);
}

function atualizarMensagem(texto) {
    mensagem.textContent = texto;
}

function iniciarArraste(evento) {
    const peca = evento.currentTarget;
    const simbolo = simboloDaPeca(peca);

    if (jogoEncerrado || simbolo !== turnoAtual) {
        evento.preventDefault();
        atualizarMensagem(`Agora é a vez do ${turnoAtual}.`);
        return;
    }

    pecaArrastada = peca;
    evento.dataTransfer.setData("text/plain", peca.id);
    evento.dataTransfer.effectAllowed = "move";

    espacos.forEach((espaco) => {
        if (espaco.children.length === 0) {
            espaco.classList.add("pode-receber");
        }
    });
}

function terminarArraste() {
    pecaArrastada = null;
    espacos.forEach((espaco) => espaco.classList.remove("pode-receber"));
}

function permitirSoltura(evento) {
    if (pecaArrastada && evento.currentTarget.children.length === 0) {
        evento.preventDefault();
    }
}

function soltarPeca(evento) {
    evento.preventDefault();

    const espaco = evento.currentTarget;
    const idDaPeca = evento.dataTransfer.getData("text/plain");
    const peca = document.getElementById(idDaPeca) || pecaArrastada;

    if (!peca || espaco.children.length > 0 || jogoEncerrado) {
        terminarArraste();
        return;
    }

    const simbolo = simboloDaPeca(peca);
    if (simbolo !== turnoAtual) {
        terminarArraste();
        return;
    }

    espaco.appendChild(peca);
    espaco.dataset.simbolo = simbolo;
    espaco.classList.add("ocupado");
    peca.draggable = false;

    terminarArraste();
    verificarResultado();
}

function verificarResultado() {
    const tabuleiro = [...espacos].map((espaco) => espaco.dataset.simbolo || "");

    const combinacaoVencedora = combinacoesVencedoras.find((combinacao) => {
        const [primeiro, segundo, terceiro] = combinacao;
        return tabuleiro[primeiro] &&
            tabuleiro[primeiro] === tabuleiro[segundo] &&
            tabuleiro[primeiro] === tabuleiro[terceiro];
    });

    if (combinacaoVencedora) {
        const vencedor = tabuleiro[combinacaoVencedora[0]];
        combinacaoVencedora.forEach((indice) => {
            espacos[indice].classList.add("vencedora");
        });
        jogoEncerrado = true;
        pararTimer();
        atualizarMensagem(`Parabéns! O lado ${vencedor} venceu!`);
        return;
    }

    if (tabuleiro.every((casa) => casa !== "")) {
        jogoEncerrado = true;
        pararTimer();
        atualizarMensagem("Deu empate! Reinicie para jogar novamente.");
        return;
    }

    turnoAtual = turnoAtual === "X" ? "O" : "X";
    atualizarMensagem(`Vez do ${turnoAtual}: arraste uma peça ${turnoAtual}.`);
}

function reiniciarJogo() {
    espacos.forEach((espaco) => {
        espaco.replaceChildren();
        delete espaco.dataset.simbolo;
        espaco.classList.remove("ocupado", "vencedora", "pode-receber");
    });

    pecas.forEach((peca) => {
        peca.draggable = true;
        const lista = simboloDaPeca(peca) === "X" ? listaPecasX : listaPecasO;
        lista.appendChild(peca);
    });

    pecaArrastada = null;
    turnoAtual = "X";
    jogoEncerrado = false;
    segundos = 0;
    atualizarTimer();
    atualizarMensagem("Vez do X: arraste uma peça X para o tabuleiro.");
    iniciarTimer();
}

pecas.forEach((peca) => {
    peca.addEventListener("dragstart", iniciarArraste);
    peca.addEventListener("dragend", terminarArraste);
});

espacos.forEach((espaco) => {
    espaco.addEventListener("dragover", permitirSoltura);
    espaco.addEventListener("dragleave", () => {
        espaco.classList.remove("pode-receber");
    });
    espaco.addEventListener("drop", soltarPeca);
});

botaoResetar.addEventListener("click", reiniciarJogo);

atualizarTimer();
iniciarTimer();
