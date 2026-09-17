const botaoUsuarios = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");
const idUsuario = document.getElementById("idUsuario");

//Exemplo 1 Fetch, then e catch

// botaoUsuarios.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((dados) => {
//         console.log(dados);
//         resultado.innerHTML = "<ul>" + dados.map((user) => `<li><strong>${user.name}</strong> - ${user.email}</li>`).join("") + "</ul>";
//     })
//     .catch((erro) => {
//     console.log("Erro:", erro);
//     });
// });


//Exemplo 2 Fetch, then e catch

// botaoUsuarios.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((dados) => {
//         console.log(dados);
//         resultado.innerHTML = "";
//         dados.forEach(usuario => {
//             resultado.innerHTML += `<p><strong>${usuario.name}</strong><br>${usuario.email}</p><hr>`;
//         });
//     })
//     .catch((erro) => {
//     resultado.innerHTML = "<p>Erro ao buscar os usuários</p>";
//     console.log("Erro:", erro);
//     });
// });


//Exemplo 3 Async/Await

// botaoUsuarios.addEventListener("click", async () => {
//     try {
//         const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
//         const dados = await resposta.json();
//         resultado.innerHTML = "";
//         dados.forEach(usuario => {
//             console.log(usuario);
//             resultado.innerHTML += `<p><strong>${usuario.name}</strong><br>${usuario.email}</p><hr>`;
//         });
//     } catch (erro) {
//         resultado.innerHTML = "<p>Erro ao buscar os usuários</p>";
//         console.log("Erro:", erro);
//     }
// })


//Exemplo 4 Async/Await com ID do usuário
botaoUsuarios.addEventListener("click", async () => {
    const id = idUsuario.value;

    if(id === ""){
        
        resultado.innerHTML = "<p>Por favor, digite um ID de usuário.</p>";
        return;
    
    }

    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const dados = await resposta.json();

            resultado.innerHTML += `<p><strong>${dados.name}</strong><br>Email: ${dados.email}<br>Cidade: ${dados.address.city}<br>Telefone: ${dados.phone}</p><hr>`;

    }catch (erro) {

        resultado.innerHTML = "<p>Erro ao buscar os usuários</p>";
        
        console.log("Erro:", erro);
    
    }
});