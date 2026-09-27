function toast() {
    const show = document.getElementById("toast");
    show.classList.add("show");
    setTimeout(() => show.classList.remove("show"), 2500);
}

function salvarCadastro(form) {
    
    const dados = Object.fromEntries(new FormData(form));
    dados.dataCadastro = new Date().toISOString();

    const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

    voluntarios.push(dados);
    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
}

export function configurarCadastro() {
    const form = document.querySelector("form");
    const botao = document.getElementById("botao-formulario");
    const alerta = document.getElementById("alerta");
    const fechar = document.getElementById("alerta-fechar");

    botao.addEventListener("click", function (event) {
        event.preventDefault();

        const campos = form.querySelectorAll("input[required]");
        const faltando = Array.from(campos).some(campo => campo.value.trim() === "");

        if (faltando) {
            alerta.classList.add("show");
            return;
        }

        alerta.classList.remove("show");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        salvarCadastro(form); 
        form.reset();         
        toast();
    });

    fechar.addEventListener("click", function () {
        alerta.classList.remove("show");
    });
}