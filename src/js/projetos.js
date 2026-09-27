const doacoes = [
    { nome: "Ração", urgente: true },
    { nome: "Cobertor", urgente: true },
    { nome: "Brinquedos", urgente: false },
    { nome: "Shampoo", urgente: false }
];

const campanhas = [
    { nome: "Banho Pet", urgente: true },
    { nome: "Resgate Animal", urgente: false },
    { nome: "Adestradores Avante", urgente: false }
];

export function criarListaDoacoes() {
    const lista = document.getElementById("lista-doacoes");

    doacoes.forEach(doacao => {
        const item = document.createElement("li");

        item.textContent = doacao.nome;

        if (doacao.urgente) {
            const badge = document.createElement("span");

            badge.classList.add("badge");
            badge.textContent = "Urgente!";

            item.appendChild(badge);
        }

        lista.appendChild(item);
    });
}

export function criarListaCampanhas() {
    const lista = document.getElementById("lista-campanhas");

    campanhas.forEach(campanha => {
        const item = document.createElement("li");

        item.textContent = campanha.nome;

        if (campanha.urgente) {
            const badge = document.createElement("span");

            badge.classList.add("badge");
            badge.textContent = "Urgente!";

            item.appendChild(badge);
        }

        lista.appendChild(item);
    });
}