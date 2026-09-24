//Objeto: Pedido - Dupla: Enzzo Cossolino Anacleto, Samuel Augusto Barbosa

class Pedido {
  //Atributos:
  constructor(nomeProduto, numeroPedido, cpfcliente, qtdProduto, valorTotal, data, hora) {
    this.nomeProduto = nomeProduto;
    this.numeroPedido = numeroPedido;
    this.cpfcliente = cpfcliente;
    this.qtdProduto = qtdProduto;
    this.valorTotal = valorTotal;
    this.data = data;
    this.hora = hora;
  }

  //Métodos:

  realizarPedido(){
    console.log(`O pedido do produto ${this.nomeProduto} foi realizado com sucesso!`);
  }

  cancelarPedido(){
    console.log(`O pedido do produto ${this.cancelarPedido} foi cancelado com sucesso!`);
  }

  verDetalhesPedido(){
    console.log(`Detalhes do pedido: ${this.nomeProduto}, Número do pedido: ${this.numero}, Quantidade pedida: ${this.qtdProduto}, CPF: ${this.cpfcliente}, Valor Total: ${this.valorTotal}, Data: ${this.data}, Hora: ${this.hora}`);
  }

}

//Exemplo prático de como os objetos funcionam e são criados a partir da classe

console.log("---------------------------------");
const pedido1 = new Pedido ("Algas (200g)", 2, 55400981758, 5, 40.00, "08/09/2026", "21:00");
console.log("Pedido 1: ", pedido1);

console.log("---------------------------------");
const pedido2 = new Pedido ("Arroz Integral (5kg)", 3, 55400981758, 2 ,23.49, "10/09/2026", "12:32");
console.log("Pedido 2: ", pedido2);

console.log("---------------------------------");
const pedido3 = new Pedido ("Peito de frango (1kg)", 4, 65004388173, 2 , 27.00, "19/09/2026", "13:45");
console.log("Pedido 3: ", pedido3);

//Outra forma de mostrar os objetos criados a partir da classe (ineficaz, mas funciona)

console.log("---------------------------------");
console.log("Atributos do Pedido 1:");
console.log("nomeProduto:", pedido1.nomeProduto);
console.log("Número do pedido:", pedido1.numeroPedido);
console.log("quantidade do produto:", pedido1.qtdProduto);
console.log("CPF Cliente:", pedido1.cpfcliente);
console.log("Valor total:", pedido1.valorTotal);
console.log("Horário da compra:", pedido1.hora);
console.log("---------------------------------");
console.log("Atributos do Pedido 2:");
console.log("Nome do Produto:", pedido2.nomeProduto);
console.log("Número do Pedido:", pedido2.numeroPedido);
console.log("CPF Cliente:", pedido2.cpfcliente);
console.log("Quantidade Pedida:", pedido2.qtdProduto);
console.log("Valor Total:", pedido2.valorTotal);
console.log("Dia de Compra do Pedido:", pedido2.hora);
console.log("Horário da Compra:", pedido2.hora);
console.log("---------------------------------");
console.log("Atributos do Pedido 3:");
console.log("nomeProduto:", pedido3.nomeProduto);
console.log("Número do pedido:", pedido3.numeroPedido);
console.log("quantidade do produto:", pedido3.qtdProduto);
console.log("CPF Cliente:", pedido3.cpfcliente);
console.log("Valor total:", pedido3.valorTotal);
console.log("Horário da compra:", pedido3.hora);
console.log("---------------------------------");

//Chamando os métodos:

pedido1.verDetalhesPedido();
console.log("---------------------------------");
pedido2.verDetalhesPedido();
console.log("---------------------------------");
pedido3.verDetalhesPedido();
console.log("---------------------------------");