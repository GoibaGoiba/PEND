class Produto{

    constructor(nomeProduto, precoProduto, quantidadeEstoque){
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    venderProduto(){
        console.log(`O produto ${this.nomeProduto} foi vendido com sucesso, por ${this.precoProduto}!`);
    }
    reporEstoque(){
        console.log(`O produto ${this.nomeProduto} teve seu estoque reposto com sucesso, seu estoque agora é de ${this.quantidadeEstoque}!`);
    }
    alterarPreco(){
        console.log(`O produto ${this.nomeProduto} teve seu preço alterado para ${this.precoProduto} com sucesso!`);
    }
}

console.log("---------------------------------");
const produto1 = new Produto ("Arroz Integral (5kg)", 23.49, 10);
console.log("Produto 1: ", produto1);
produto1.venderProduto();
produto1.reporEstoque();
produto1.alterarPreco();
console.log("---------------------------------");
const produto2 = new Produto ("Peito de frango (1kg)", 27.00, 15);
console.log("Produto 2: ", produto2);
produto2.venderProduto();
produto2.reporEstoque();
produto2.alterarPreco();
console.log("---------------------------------");
const produto3 = new Produto ("Oreo (200g)", 40.00, 5);
console.log("Produto 3: ", produto3);
produto3.venderProduto();
produto3.reporEstoque();
produto3.alterarPreco();
console.log("---------------------------------");