//Enzzo Cossolino Anacleto

class Aluno {

    //Atributos:
    constructor(nome, idade, curso, matricula){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    //Métodos:
    aprender(){
        console.log(`O aluno ${this.nome} está aprendendo ${this.curso}`)
    }
    estudar(){
        console.log(`O aluno ${this.nome} tem que estudar ${this.curso}`)
    }
    apresentar(){
        console.log(`O aluno ${this.nome} tem ${this.idade} anos, está matriculado no curso de ${this.curso} e sua matrícula é ${this.matricula}`)
    }
}

//Exemplo prático de como os objetos funcionam e são criados a partir da classe
console.log("---------------------------------");
const aluno1 = new Aluno ("Enzzo Cossolino Anacleto", 17, "Engenharia de Software", 20230001);
console.log("Aluno 1: ", aluno1);
aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();
console.log("---------------------------------");
const aluno2 = new Aluno ("Samuel Augusto Barbosa", 17, "Engenharia de Software", 20230002);
console.log("Aluno 2: ", aluno2);
aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();
console.log("---------------------------------");
const aluno3 = new Aluno ("Guilherme Scarparo Grande", 17, "Engenharia de Software", 20230003);
console.log("Aluno 3: ", aluno3);
aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
console.log("---------------------------------");
const aluno4 = new Aluno ("Marcelo Duzzi Santonio", 17, "Engenharia de Software", 20230004);
console.log("Aluno 4: ", aluno4);
aluno4.aprender();
aluno4.estudar();
aluno4.apresentar();
console.log("---------------------------------");
const aluno5 = new Aluno ("Rian Rafael Alves da Silva", 17, "Engenharia de Software", 20230005);
console.log("Aluno 5: ", aluno5);
aluno5.aprender();
aluno5.estudar();
aluno5.apresentar();
console.log("---------------------------------");
const aluno6 = new Aluno ("Diego Fonseca Marques Tavares", 17, "Engenharia de Software", 20230006);
console.log("Aluno 6: ", aluno6);
aluno6.aprender();
aluno6.estudar();
aluno6.apresentar();
console.log("---------------------------------");