var botaoEntrar = document.querySelector("#signin");
var botaoRegistrar = document.querySelector(".btn-second");
var form = document.querySelector(".form");

botaoEntrar.addEventListener("click", function() {
    alert("Desculpe, essa tela ainda não está pronta.");
});

botaoRegistrar.addEventListener("click", function(evento) {
    evento.preventDefault();

    var nome = form.querySelector("input[placeholder='Nome']").value.trim();
    var email = form.querySelector("input[placeholder='Email']").value.trim();
    var senha = form.querySelector("input[placeholder='Senha']").value.trim();

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos antes de registrar.");
        return;
    }

    for (var i = 0; i < nome.length; i++) {
        var letra = nome[i];
        if (!isNaN(letra) && letra !== " ") {
            alert("O nome não pode conter números.");
            return;
        }
    }

    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailValido)) {
        alert("Por favor, digite um email válido.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
});
