//Classe -> Forma para criar objetos
class Carro {
  //Construtor -> Método especial para criar objetos
  constructor(
    //Parâmetros -> Valores que serão passados para o construtor
    marca,
    modelo,
    ano,
    cor,
  ) {
    //Atributos -> Propriedade da classe
    //This -> Referência ao objeto que está sendo criado
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  //Métodos -> Funções que pertencem a classe
  //
  ligar() {
    console.log("O carro está ligado");
  }
  //
  acelerar() {
    console.log("O carro está acelerando");
  }
  //
  frear() {
    console.log(`${this.modelo} está freando`);
  }
}

//Exemplo prático de como os objetos funcionam e são criados a partir da classe

const carro1 = new Carro("Wolkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);
carro1.ligar();
carro1.acelerar();

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);
carro2.ligar();
carro2.acelerar();

const carro3 = new Carro("GWM", "TANK 300", 2023, "Cinza");
console.log("Carro 3:", carro3);
carro3.ligar();
carro3.acelerar();

//Outra forma de mostrar os objetos criados a partir da classe (ineficaz, mas funciona)

console.log("---------------------------------");
console.log("Atributos do Carro 1:");
console.log("Marca:", carro1.marca);
console.log("Modelo:", carro1.modelo);
console.log("Ano:", carro1.ano);
console.log("Cor:", carro1.cor);
console.log("---------------------------------");
console.log("Atributos do Carro 2:");
console.log("Marca:", carro2.marca);
console.log("Modelo:", carro2.modelo);
console.log("Ano:", carro2.ano);
console.log("Cor:", carro2.cor);
console.log("---------------------------------");
console.log("Atributos do Carro 3:");
console.log("Marca:", carro3.marca);
console.log("Modelo:", carro3.modelo);
console.log("Ano:", carro3.ano);
console.log("Cor:", carro3.cor);
console.log("---------------------------------");

