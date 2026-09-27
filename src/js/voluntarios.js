const voluntariosPadrao = [
    { nome: "João Vinicius", areas: "banho" },
    { nome: "Felipe Andrade", areas: "banho" },
    { nome: "Camila Rezende", areas: "banho" },
    { nome: "Bruno Cardoso", areas: "banho" },
    { nome: "Larissa Nogueira", areas: "banho" },

    { nome: "Rafael Monteiro", areas: "resgate" },
    { nome: "Thiago Ventura", areas: "resgate" },
    { nome: "Gabriel Fonseca", areas: "resgate" },
    { nome: "Ingrid Martins", areas: "resgate" },
    { nome: "Vinícius Tavares", areas: "resgate" },
    { nome: "Beatriz Lacerda", areas: "resgate" },
    { nome: "Diego Barbosa", areas: "resgate" },

    { nome: "Pietro Santana", areas: "adestradores" },
    { nome: "Amanda Morais", areas: "adestradores" },
    { nome: "Letícia Oliveira", areas: "adestradores" },
    { nome: "Eduardo Pimentel", areas: "adestradores" },
    { nome: "Sofia Carneiro", areas: "adestradores" },
    { nome: "Matheus Correia", areas: "adestradores" },

    { nome: "Pedro Mello", areas: "" },
    { nome: "Juliana Prado", areas: "" },
    { nome: "Renato Azevedo", areas: "" },
    { nome: "Carolina Duarte", areas: "" }
];

export function criarListaVoluntarios() {
    const cadastrados = JSON.parse(localStorage.getItem("voluntarios")) || [];
    const voluntarios = [...voluntariosPadrao, ...cadastrados];

    const listasPorArea = {
        banho: document.getElementById("lista-banho"),
        resgate: document.getElementById("lista-resgate"),
        adestradores: document.getElementById("lista-adestradores"),
        "": document.getElementById("lista-sem-preferencia")
    };

    voluntarios.forEach(voluntario => {
        const lista = listasPorArea[voluntario.areas];
        if (!lista) return;

        const item = document.createElement("li");
        item.textContent = voluntario.nome;
        lista.appendChild(item);
    });
}