const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const pagina = document.getElementById("pagina");
const STARTGG_TOKEN = "cf222f6f246812cfeadc137aa6a8beec";

// Variáveis de controle de paginação
let paginaAtual = 1;
const itensPorPagina = 16;

async function carregarPaginaTorneios(pagina = 1) {
  console.log(`Carregando página ${pagina}...`);

  const url = "https://api.start.gg/gql/alpha";

  const query = `
    query EventosPaginados($page: Int, $perPage: Int) {
      tournaments(query: {
        perPage: $perPage,
        page: $page,
        filter: {
          upcoming: true
        }
      }) {
        pageInfo {
          totalPages
          total
        }
        nodes {
          id
          name
          city
          addrState
          startAt
          url
          images {
            url
            type
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STARTGG_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          page: pagina,
          perPage: itensPorPagina,
        },
      }),
    });

    const resultado = await response.json();
    
    if (resultado.errors) {
      console.error("Erro na query GraphQL:", resultado.errors);
      return;
    }

    const torneios = resultado.data?.tournaments?.nodes || [];

    // Limpa os eventos da página anterior
    novaListaEventos.eventos = [];

    torneios.forEach((torneio) => {
      const dataInicio = torneio.startAt
        ? new Date(torneio.startAt * 1000).toLocaleDateString("pt-BR")
        : "Data a confirmar";

      const imagem =
        torneio.images?.find((img) => img.type === "profile")?.url ||
        torneio.images?.[0]?.url ||
        "https://via.placeholder.com/300x400?text=Sem+Imagem";

      const localizacao = torneio.city
        ? `${torneio.city}, ${torneio.addrState || ""}`
        : "Online / Local não informado";

      const urlDetalhes = `https://start.gg/${torneio.url}/details`;

      // Cria o objeto Evento
      const evento = new Evento(
        torneio.name,
        dataInicio,
        localizacao,
        urlDetalhes,
        imagem,
      );

      // Adiciona à lista
      novaListaEventos.adicionarEvento(evento);
    });

    // Agora que os dados chegaram, exibe na tela
    novaListaEventos.exibirNaTela();
  } catch (erro) {
    console.error("Erro ao carregar página:", erro);
  }
}

// Funções para você conectar aos botões de "Anterior" e "Próximo" no seu HTML
function proximaPagina() {
  paginaAtual++;
  carregarPaginaTorneios(paginaAtual);
}

function paginaAnterior() {
  if (paginaAtual > 1) {
    paginaAtual--;
    carregarPaginaTorneios(paginaAtual);
  } else {
    console.log("Você já está na primeira página!");
  }
}

class Evento {
  constructor(nomeEvento, dataInicio, localizacao, urlDetalhes, imagem) {
    this.nomeEvento = nomeEvento;
    this.dataInicio = dataInicio;
    this.localizacao = localizacao;
    this.urlDetalhes = urlDetalhes;
    this.imagem = imagem;
  }
}

class ListaEventos {
  constructor() {
    this.eventos = [];
  }

  adicionarEvento(evento) {
    this.eventos.push(evento);
  }

  exibirNaTela() {
    const eventos = document.getElementById("listaEventos");
    eventos.innerHTML = "";

    pagina.innerHTML = `${paginaAtual}`;

    this.eventos.forEach((evento) => {
      eventos.innerHTML += `
      <div class="evento">
        <h3>${evento.nomeEvento}</h3>
        <p>Data de Início: ${evento.dataInicio}</p>
        <p>Local: ${evento.localizacao}</p>
        <a href="${evento.urlDetalhes}" target="_blank">Detalhes do Evento</a>
        <img src="${evento.imagem}" alt="Imagem do Evento" />
      </div>
    `;
    });
  }
}
// Executa a primeira página ao carregar o script
const novaListaEventos = new ListaEventos();
carregarPaginaTorneios(paginaAtual);
novaListaEventos.exibirNaTela();

botaoProximo.addEventListener("click", proximaPagina);
botaoAnterior.addEventListener("click", paginaAnterior);
