// Script JavaScript para o site de acervo digital.

document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById('googleForm');

    iframe.addEventListener('load', () => {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const resizeObserver = new ResizeObserver(() => {
            iframe.style.height = iframeDocument.body.scrollHeight + 'px';
        });

        resizeObserver.observe(iframeDocument.body);
    });
});