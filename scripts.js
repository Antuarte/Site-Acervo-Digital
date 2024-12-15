// Este é o arquivo de scripts JavaScript para o site de acervo digital.

// Função para renderizar os itens do catálogo
document.addEventListener("DOMContentLoaded", () => {
    const catalogContainer = document.querySelector("#catalog .catalog-container");

    const items = [
        { name: "Arquivo 1", description: "Descrição do Arquivo 1", id: 1 },
        { name: "Arquivo 2", description: "Descrição do Arquivo 2", id: 2 },
        { name: "Arquivo 3", description: "Descrição do Arquivo 3", id: 3 }
    ];

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="#" class="button">Download</a>
        `;
        catalogContainer.appendChild(itemElement);
    });
});

// Validação do formulário de contato
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    alert("Formulário enviado com sucesso!");
    event.target.reset();
});
