class Estoque {
  constructor() {
    this.produtos = [];
    this.carregarLocalStorage();
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    localStorage.setItem("meuEstoque", JSON.stringify(this.produtos));
  }

  aplicarDesconto(produto) {
    const precoDesconto =
      produto.preco - (produto.preco * produto.desconto) / 100;
    return precoDesconto;
  }

  excluirProduto(indice) {
    this.produtos.splice(indice, 1);
    localStorage.setItem("meuEstoque", JSON.stringify(this.produtos));
    this.exibirNaTela();
  }

  exibirNaTela() {
    const resultadoProduto = document.querySelector("#resultadoProduto");
    resultadoProduto.innerHTML = "";
    
    this.produtos.forEach((produto, indice) => {
      resultadoProduto.innerHTML += `
        <div>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <p>Preço com desconto: R$ ${this.aplicarDesconto(produto).toFixed(2)}</p>
            <button class="excluirProduto" data-indice="${indice}">[Excluir]</button>
        </div>`;
    });

    const botoes = resultadoProduto.querySelectorAll(".excluirProduto");
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        const indice = Number(botao.dataset.indice);
        this.excluirProduto(indice);
      });
    });
  }

  carregarLocalStorage() {
    const dadosSalvos = localStorage.getItem("meuEstoque");
    if (dadosSalvos) {
      this.produtos = JSON.parse(dadosSalvos);
    }
  }
} 

class Produto {
  constructor(nome, preco, categoria, desconto) {
    this.nome = nome;
    this.preco = Number(preco);
    this.categoria = categoria;
    this.desconto = desconto;
  }
}

const estoque = new Estoque();

estoque.exibirNaTela();

const nomeProduto = document.querySelector("#nomeProduto");
const precoProduto = document.querySelector("#precoProduto");
const categoriaProduto = document.querySelector("#categoriaProduto");
const descontoProduto = document.querySelector("#descontoProduto");
const botaoCadastrarProduto = document.querySelector("#botaoCadastrarProduto");

botaoCadastrarProduto.addEventListener("click", function () {
  const produto = new Produto(
    nomeProduto.value,
    precoProduto.value,
    categoriaProduto.value,
    descontoProduto.value,
  );

  estoque.adicionarProduto(produto);
  estoque.exibirNaTela();
});
