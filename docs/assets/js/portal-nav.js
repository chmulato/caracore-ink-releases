/**
 * Cara Core Ink Agenda — abre e fecha o menu do cabeçalho institucional no mobile.
 */
(function () {
    var button = document.getElementById('cc-menu-button');
    var menu = document.getElementById('cc-menu');
    if (!button || !menu) return;

    button.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
        button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
})();
