import {
    criarListaDoacoes,
    criarListaCampanhas
} from "./projetos.js";

import {
    configurarCadastro
} from "./formulario.js";

import { 
    criarListaVoluntarios
} from "./voluntarios.js";

const main = document.getElementById("main");

function mostrarPagina(nomeTemplate) {

    const template = document.getElementById(nomeTemplate);
    main.replaceChildren(template.content.cloneNode(true));

    if (nomeTemplate === "tpl-projetos") {
        criarListaDoacoes();
        criarListaCampanhas();
    }

    if (nomeTemplate === "tpl-cadastro") {
        configurarCadastro();
    }

    if (nomeTemplate === "tpl-voluntarios") {
        criarListaVoluntarios();
    }
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.dataset.pagina;
        mostrarPagina(pagina);
    });
});

mostrarPagina("tpl-inicio");