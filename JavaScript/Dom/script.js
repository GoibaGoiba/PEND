let botao = document.getElementById("botao");
botao.addEventListener("click", function(){
    alert("Olá,DOM!")
});
let botao2 = document.getElementById("botao2");
botao2.addEventListener("click", function(){
    let titulo = document.querySelector("#titulo");
    titulo.textContent = "Texto alterado pelo JavaScript";
    titulo.style.color="blue";
    titulo.style.fontSize = "32px";
    botao2.setAttribute("disabled",true);
});
