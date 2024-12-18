// Este é o arquivo de scripts JavaScript para o site de acervo digital.

/**
 * Função para renderizar os itens do catálogo.
 * Esta função é executada quando o conteúdo do DOM é carregado.
 * Ela seleciona o contêiner do catálogo e adiciona itens dinamicamente.
 */
document.addEventListener("DOMContentLoaded", () => {
    const catalogContainer = document.querySelector("#catalog .catalog-container");

    // Lista de itens do catálogo
    const items = [
        { name: "Arquivo 1", description: "Descrição do Arquivo 1", id: 1 },
        { name: "Arquivo 2", description: "Descrição do Arquivo 2", id: 2 },
        { name: "Arquivo 3", description: "Descrição do Arquivo 3", id: 3 }
    ];

    // Para cada item na lista, cria um elemento HTML e o adiciona ao contêiner do catálogo
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

/**
 * Função para validar o formulário de contato e enviar e-mail.
 * Esta função é executada quando o formulário é enviado.
 * Ela valida os campos do formulário e envia um e-mail usando o servidor Node.js.
 */
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    // Envia os dados do formulário para o servidor Node.js
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.text())
    .then(data => {
        console.log('SUCCESS!', data);
        alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.log('FAILED...', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    });

    // Reseta o formulário após o envio
    event.target.reset();
});