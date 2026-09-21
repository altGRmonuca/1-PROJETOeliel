function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "1234") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso!";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos!";
    }
}