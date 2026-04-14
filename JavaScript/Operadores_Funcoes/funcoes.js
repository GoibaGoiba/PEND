//Exemplos de funções

function saudacao(){
    console.log("Olá, JavaScript!");
}
saudacao();

function nomeDaFuncao(parametros){
    return resultado;
}

function somar(a, b){
    return a + b;
}

console.log(somar(5,3), "Essa é uma função com retorno e com parâmetros.");

function saudacoes(nome){
    console.log("Olá, " + nome, ", essa é uma função sem retorno com parâmetros.");
}

saudacoes("Anna");

//Exercícios funções

function imc(altura, peso){
    imcTotal = (peso/(altura**2));
    imcTotal = imcTotal.toFixed(2);
    return imcfinal = parseFloat(imcTotal);
}

console.log("Seu IMC é,", imc(1.79, 69));

function parouImpar(a){
    if(a %2 == 0){
        console.log("O número foi", a, "e ele é par.");
    }else if(a %2 ==1){
        console.log("O número foi", a, "e ele é ímpar");
    }
}
parouImpar(8);