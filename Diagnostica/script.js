//Variáveis:

//Campo de nome:

let nome = document.getElementById("nome");
let confirmarNome = document.getElementById("confirmarNome");

//Campo de email:

let email = document.getElementById("email");
let confirmarEmail = document.getElementById("confirmarEmail");

//Campo de senha:

let senha = document.getElementById("senha");
let confirmarSenha = document.getElementById("confirmarSenha");
let erroSenha = document.getElementById("erroSenha");
let erroConfSenha = document.getElementById("erroConfSenha");

//Checklist de senha:

let numRequerido = document.getElementById("numRequerido");
let letraMaiusMinus = document.getElementById("letraMaiusMinus");
let caracterEspecial = document.getElementById("caracterEspecial");
let temNum = document.getElementById("temNum");

//Botão de confirmação:

let confirmacao = document.getElementById("confirmacao");
let mensagem = document.getElementById("mensagem");

//Icones de senha:

let iconeSenha = document.getElementById("iconeSenha");
let iconeConfSenha = document.getElementById("iconeConfSenha");

//Formulário:

let divFormulario = document.getElementById("formulario");
let divLinks = document.getElementById("links");

//Código em sí:

//Funções:

function ConfirmaNomeNotVazio() {
  if (nome.value.trim() === "") {
    confirmarNome.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    return false;
  } else {
    confirmarNome.innerHTML = "<p class='valido'>Nome enviado com sucesso!</p>";
    return true;
  }
}

function ConfirmaEmailNotVazio() {
  let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    confirmarEmail.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    return false;
  } else if (!validarEmail.test(email.value)) {
    confirmarEmail.innerHTML =
      "<p class='erro'>Por favor, insira um email válido</p>";
    return false;
  } else {
    confirmarEmail.innerHTML =
      "<p class='valido'>Email enviado com sucesso!</p>";
    return true;
  }
}

function ConfirmaSenhaNotVazia() {
  let senhaComplex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (senha.value.trim() === "") {
    erroSenha.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    return false;
  } else if (!senhaComplex.test(senha.value)) {
    erroSenha.innerHTML =
      "<p class='erro'>A senha não atende aos requisitos</p>";
    return false;
  } else {
    erroSenha.innerHTML = "<p class='valido'>Senha enviada com sucesso!</p>";
    return true;
  }
}

function ConfirmaSenhaIgualorNot() {
  if (confirmarSenha.value.trim() === "") {
    erroConfSenha.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    return false;
  } else if (senha.value !== confirmarSenha.value) {
    erroConfSenha.innerHTML = "<p class='erro'>As senhas não coincidem</p>";
    return false;
  } else {
    erroConfSenha.innerHTML = "<p class='valido'>Senhas coincidem!</p>";
    return true;
  }
}

//Event Listeners:

iconeSenha.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.setAttribute("type", "text");
    iconeSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    senha.setAttribute("type", "password");
    iconeSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});

iconeConfSenha.addEventListener("click", function () {
  if (confirmarSenha.type === "password") {
    confirmarSenha.setAttribute("type", "text");
    iconeConfSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    confirmarSenha.setAttribute("type", "password");
    iconeConfSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});

senha.addEventListener("keyup", function () {
  let campo = senha.value.trim();

  // 1. Validação de Comprimento
  if (campo.length >= 8) {
    numRequerido.style.color = "green";
  } else {
    numRequerido.style.color = ""; // Volta ao padrão (preto ou cor do CSS)
  }

  // 2. Validação de Letras Maiúsculas e Minúsculas
  if (/[A-Z]/.test(campo) && /[a-z]/.test(campo)) {
    letraMaiusMinus.style.color = "green";
  } else {
    letraMaiusMinus.style.color = "";
  }

  // 3. Validação de Caracteres Especiais
  if (/[@$!%*?&]/.test(campo)) {
    caracterEspecial.style.color = "green";
  } else {
    caracterEspecial.style.color = "";
  }

  // 4. Validação de Números
  if (/\d/.test(campo)) {
    temNum.style.color = "green";
  } else {
    temNum.style.color = "";
  }
});

confirmacao.addEventListener("click", () => {
  let nomeOk = ConfirmaNomeNotVazio();
  let emailOk = ConfirmaEmailNotVazio();
  let senhaOk = ConfirmaSenhaNotVazia();
  let senhasIguais = ConfirmaSenhaIgualorNot();

  if (nomeOk && emailOk && senhaOk && senhasIguais) {
    divFormulario.style.display = "none"; // Esconde o formulário
    divLinks.style.display = "block"; // Mostra os contatos
    mensagem.innerHTML =
      "<p class='valido'>Cadastro realizado com sucesso! Meus contatos estão liberados abaixo.</p>";
  } else {
    mensagem.innerHTML =
      "<p class='erro'>Por favor, corrija os erros acima antes de continuar.</p>";
  }
});
