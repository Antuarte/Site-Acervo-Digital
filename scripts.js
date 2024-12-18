// Script JavaScript para o site de acervo digital.

/**
 * Função para lidar com o envio do formulário de contato.
 * Esta função exibe uma mensagem de confirmação quando o formulário é enviado.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Obtém os valores dos campos do formulário
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const package = document.querySelector("select[name='package']").value;

        // Exibe uma mensagem de confirmação
        alert(`Obrigado, ${name}! Sua solicitação para o pacote ${package} foi recebida. Entraremos em contato pelo e-mail ${email}.`);

        // Reseta o formulário após o envio
        event.target.reset();
    });
});