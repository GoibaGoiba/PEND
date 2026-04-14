//Variáveis

//Variáveis do campo nome:

let nome = document.querySelector("#nome"); // --> Input do nome
let nomeOBG = document.querySelector("#nomeObrg"); // --> Paragrafo para as confirmações desse campo

//Variáveis do campo email:

let email = document.querySelector("#email"); // --> Input do Email
let emailOBG = document.querySelector("#emailObrg"); // --> Paragrafo para as confirmações desse campo

//Variáveis do campo senha:

let senha = document.querySelector("#senha"); // --> Input da senha
let senhaOBG = document.querySelector("#forcaSenha") // --> Paragrafo para as confirmações desse campo
let showSenha = document.querySelector("#showSenha") // --> "Botão" que mostra a senha

//Variáveis do campo confirmar senha:

let confirmSenha = document.querySelector("#confirmSenha"); // --> Input do campo de confirmação da senha
let confirmSenhaOBG = document.querySelector("#senhaCorreta"); // --> Paragrafo para as confirmações desse campo
let showConfirmSenha = document.querySelector("#showConfirmSenha"); // --> "Botão" que mostra a senha

//Variáveis do campo telefone:

let tel = document.querySelector("#telefone"); // --> Input do telefone
let telOBG = document.querySelector("#telObrg"); // --> Paragrafo para as confirmações desse campo
let addTel = document.querySelector("#addTel"); // --> "Botão" que cria outro input para outro telefone ser adicionado 
let contNovoTel = document.querySelector("#containerNovoTel"); // --> É onde os telefones a serem adicionados ficam

//Variáveis do campo cadastrar:

let cadastrar = document.querySelector("#cadastrar"); // --> Botão de cadastro final


// Campo de verificação de nome:

cadastrar.addEventListener("click", function () {

    let campo = nome.value;

    //Se o campo estiver vazio ele irá dar um erro, caso contrário ele será validado com sucesso
    if (campo.trim() === "") {
        nomeOBG.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    } else {
        nomeOBG.innerHTML = "<p class='valido'>Nome enviado com sucesso!</p>";
    }
});


// Campo de verificação de email:


cadastrar.addEventListener("click", function () {

    //Esse é o campo de input  do Email
    let campo = email.value;

    //Esse é o Regex que faz o email ser funcional, ele garante que o email tem que ter um . e um @ em lugares específicos para que a estrutura email esteja correta

    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Essa é a validação:

    //1. Verifica se ele está vazio, se estiver, ele aponta o erro ao usuário.
    if (campo.trim() === "") {
        emailOBG.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";

        //2. Verifica se o campo do email está de acordo com as regras impostas pelo Regex citado acima, se estiver diferente da regra um erro ocorrerá, caso esteja de acordo, será validado com sucesso
    } if (!validarEmail.test(campo)) {
        emailOBG.innerHTML = "<p class='erro'>O email possui um erro.";
    } else {
        emailOBG.innerHTML = "<p class='valido'>Email cadastrado com sucesso!";
    }
});

// CAMPO DE VERIFICAÇÂO SENHA, VOLTAR MAIS TARDE

senha.addEventListener("input", function () {

    //Esse é o campo de input da senha
    let campo = senha.value;

    //Garante que a senha possua pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número de 0-9, 1 caractere especial e garante também que o minímo de comprimento seja 8 caracteres.
    let senhaComplex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (campo < 8 && !senhaComplex.test(senha.value)) {
        senhaOBG.innerHTML = "<p class='erro'>A senha é curta demais.";
    } if (campo = 8 && !senhaComplex.test(senha.value)) {
        senhaOBG.innerHTML = "<p class='erro'>A senha possui um erro.";
    } else {
        senhaOBG.innerHTML = "<p class='valido'>A senha é valida.";
    }
}
);

showSenha.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        showSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        senha.setAttribute('type', 'password');
        showSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
});

cadastrar.addEventListener("click", function () {

    let campo = senha.value;

    let senhaComplex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //Garante que a senha possua pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número de 0-9, 1 caractere especial e garante também que o minímo de comprimento seja 8 caracteres.

    if (campo.trim() === "") {
        senhaOBG.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    } if (!senhaComplex.test(campo)) {
        senhaOBG.innerHTML = "<p class='erro'>A senha possui um erro</p>";
    } else {
        senhaOBG.innerHTML = "<p class='valido'>Senha enviada com sucesso!</p>";
    }

});

// CAMPO DE CONFIRMAÇÂO SENHA, VOLTAR MAIS TARDE

cadastrar.addEventListener("click", function () {

    let campo = confirmSenha.value;
    if (campo.trim() === "") {
        confirmSenhaOBG.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    } if (campo != senha.value || campo.trim() === "") {
        confirmSenhaOBG.innerHTML = "<p class='erro'>A senha não é a mesma";
    } else {
        confirmSenhaOBG.innerHTML = "<p class='valido'>A senha foi confirmada com sucesso";
    }
});

showConfirmSenha.addEventListener("click", function () {
    if (confirmSenha.type === "password") {
        confirmSenha.setAttribute('type', 'text');
        showConfirmSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        confirmSenha.setAttribute('type', 'password');
        showConfirmSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
});

// CAMPO DE CONFIRMAÇÂO TELEFONE, VOLTAR MAIS TARDE
tel.addEventListener("input", function (event) {

    let campo = event.target;
    let nums = campo.value.replace(/\D/g, ''); // Pega somente digitos
    let telFormatado = '';

    if (nums.length > 0) {
        //Começa com o DDD
        telFormatado = '(' + nums.slice(0, 2);

        if (nums.length > 2) {
            // Fecha o DDD e começa a primeira parte do telefone
            telFormatado += ') ' + nums.slice(2, 7);
        }

        if (nums.length > 7) {
            // Adiciona o traço e termina o telefone
            telFormatado += '-' + nums.slice(7, 11);
        }
    }

    campo.value = telFormatado;

});

cadastrar.addEventListener("click", function () {

    let campo = tel.value;
    if (campo.trim() === "") {
        telOBG.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";
    } else {
        telOBG.innerHTML = "<p class='valido'>Telefone cadastrado com sucesso!</p>";
    }

});

addTel.addEventListener("click", function () {
    // 1. Criamos os elementos principais
    let caixaNovoTel = document.createElement("div");
    let novoTel = document.createElement("input");
    let delTel = document.createElement("i");
    let resTel = document.createElement("p");

    // 2. Configuramos o input e o div
    caixaNovoTel.className = "input-group";
    novoTel.type = 'text';
    novoTel.placeholder = 'Coloque um telefone Ex: (99) 99999-9999';
    novoTel.maxLength = 15;

    // 3. Configuramos o ícone de deletar (Usando classes do Bootstrap)
    delTel.className = 'bi bi-x-square excluir';

    // 4. Lógica de DELETAR
    // Referenciamos diretamente a 'caixaNovoTel' que criamos agora
    delTel.addEventListener("click", function () {
        caixaNovoTel.remove();
    });

    // 5. Máscara de Telefone 
    novoTel.addEventListener("input", function (event) {
        let nums = event.target.value.replace(/\D/g, '');
        let telFormatado = '';
        if (nums.length > 0) {

            //Começa com o DDD
            telFormatado = '(' + nums.slice(0, 2);

            // Fecha o DDD e começa a primeira parte do telefone
            if (nums.length > 2) telFormatado += ') ' + nums.slice(2, 7);

            // Adiciona o traço e termina o telefone
            if (nums.length > 7) telFormatado += '-' + nums.slice(7, 11);
        }
        event.target.value = telFormatado;
    });

    // 6. Montamos a estrutura
    caixaNovoTel.style.marginBottom = "15px";
    caixaNovoTel.appendChild(novoTel);
    caixaNovoTel.appendChild(delTel);
    caixaNovoTel.appendChild(resTel);

    contNovoTel.appendChild(caixaNovoTel);

    //7. Verificação do campo
    cadastrar.addEventListener("click", function () {

        let campo = novoTel.value;

        if (campo.trim() === "") {

            resTel.innerHTML = "<p class='erro'>Este campo é obrigatório</p>";

        } else {

            resTel.innerHTML = "<p class='valido'>Telefone cadastrado com sucesso!</p>";

        }

    });
});
