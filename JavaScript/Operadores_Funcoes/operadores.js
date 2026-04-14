//Início da jornada de JavaScript

console.log("Olá, JavaScript!");

//Exercício sobre Operadores Arítimeticos

let a = 10;
let b = 3;
let contador = 5;
let contador2 = 5;
let contador3 = 5;

//Primeiro exercício usando o JavaScript

let media = (contador + contador2 + contador2)/3 

//Terceiro exercício

let mIdade = 18
let idade = 7

//Quarto exercício

let nmaior = 15
let nmenor = 5

//Exercício sobre Operadores Relacionais

let x = 10;
let y = "10";

//Exercício sobre Operadores Lógicos

let edad = 20;
let temCNH = true;

let chovendo = false;
let guardaChuva = false;

let ligado = false;

//Variáveis exercício 5 & 6

let mediaAluno = 8;
let frequencia = 60;

let cliente = "Tem token"
//Código Operadores Arítimeticos

console.log(a + b, "Essa é uma adição");
console.log(a - b, "Essa é uma subtração");
console.log(a * b, "Essa é uma multiplicação");
console.log(a / b, "Essa é a divisão");
console.log(a % b, "Esse é o resto da divisão");
console.log(a ** b, "Esse é o exponenciação");

contador++;
console.log(contador, "Esse é o incrementação");

contador2--;
console.log(contador2, "Esse é a decrementação");

contador3 = contador3 + 2;
console.log(contador3, "Essa é a incrementação com grandeza maior que 1");

//Código do primeiro exercício

console.log(media, "Essa é a média");

console.log(contador3 % contador2, "Esse o resto da divisão");

//Código Operadores Relacionais

console.log(x == y, "Esse é o igual (valor)");
console.log(x === y, "Esse é o igual (valor e tipo)");
console.log(x != y, "Esse é o diferente (valor)");
console.log(x !== y, "Esse é o diferente (valor e tipo)");

//Terceiro exercício

if(idade >= mIdade){
    console.log("Você é maior de idade! Você tem", idade, "anos.");
}else{
    console.log("Você é menor de idade! Você tem", idade, "anos.");
}

// Quarto exercício

if(nmaior > nmenor){
    console.log("Os números foram", nmaior, "e",nmenor, ", o maior deles é", nmaior, ".");
}else if(nmaior < nmenor){
    console.log("Os números foram", nmaior, "e",nmenor, ", o número", nmaior,"é menor que", nmenor);
}else if(nmaior = nmenor){
    console.log("Os números", nmaior, "e",nmenor, ", são iguais.");
}

// Código do exercício de Operadores Lógicos

console.log("Possui a idade maior a dezoito anos e uma CNH?", edad >= 18 && temCNH);

console.log("Está chovendo e possui um guarda chuva?", chovendo || guardaChuva);

console.log("Está desligado?", !ligado); //True

//Quinto e sexto exercício. Sobre Operadores lógicos

if(mediaAluno > 7 && frequencia > 75){
    console.log("Parabéns! Você passou!")
}else{
    console.log("Infelizmente você não passou...")
}

if(cliente == "Tem login" || cliente == "Tem token"){
    console.log("Acesso permitido.")
}else{
    console;log("Acesso negado.")
}