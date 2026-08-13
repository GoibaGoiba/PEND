class Produto {

    constructor (nome, preco, categoria, desconto){

        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoDesconto = this.preco - (this.preco * this.desconto / 100);
        
        return precoDesconto;
    }

    exibir(){
        const resultadoProduto = document.querySelector("#resultadoProduto");

        resultadoProduto.innerHTML = `
        <div>
            <p>Nome: ${this.nome}</p>
            <p>Preço: R$ ${this.preco.toFixed(2)}</p>
            <p>Categoria: ${this.categoria}</p>
            <p>Desconto: ${this.desconto}%</p>
            <p>Preço com desconto: R$ ${this.aplicarDesconto().toFixed(2)}</p>
        </div>`;

    }

}

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

    produto.exibir();


});