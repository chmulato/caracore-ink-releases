/**
 * CaraCore Ink Agenda — abre e fecha o menu do cabeçalho institucional no mobile.
 */
(function () {
    "use strict";

    var button = document.getElementById("mobile-menu-button");
    var menu = document.getElementById("mobile-menu");
    if (!button || !menu) {
        return;
    }

    function setOpen(open) {
        menu.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", open ? "true" : "false");
        button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    button.addEventListener("click", function () {
        setOpen(!menu.classList.contains("is-open"));
    });

    menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
            setOpen(false);
            button.focus();
        }
    });
})();
