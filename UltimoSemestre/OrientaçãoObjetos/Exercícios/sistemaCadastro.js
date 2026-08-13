class Estoque {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  aplicarDesconto(produto) {
    const precoDesconto =
      produto.preco - (produto.preco * produto.desconto) / 100;

    return precoDesconto;
  }

  exibirNaTela(produto) {
    const resultadoProduto = document.querySelector("#resultadoProduto");

    resultadoProduto.innerHTML = "";
    this.produtos.forEach((produto) => {
      resultadoProduto.innerHTML += `
        <div>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <p>Preço com desconto: R$ ${this.aplicarDesconto(produto).toFixed(2)}</p>
        </div>`;
    });
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
const nomeProduto = document.querySelector("#nomeProduto");
const precoProduto = document.querySelector("#precoProduto");
const categoriaProduto = document.querySelector("#categoriaProduto");
const descontoProduto = document.querySelector("#descontoProduto");
const botaoCadastrarProduto = document.querySelector("#botaoCadastrarProduto");
// const resultadoProduto = document.querySelector("#resultadoProduto");

botaoCadastrarProduto.addEventListener("click", function () {
  const produto = new Produto(
    nomeProduto.value,
    precoProduto.value,
    categoriaProduto.value,
    descontoProduto.value,
  );

  estoque.adicionarProduto(produto);
  estoque.exibirNaTela(produto);
});
