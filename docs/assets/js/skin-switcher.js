/**
 * CaraCore Ink Agenda — seletor de segmento da vitrine.
 *
 * As rotas /tattoo/, /odontologia/ e /beleza/ são páginas estáticas: o seletor
 * só navega. No endereço neutro (/), ?segmento=<valor> redireciona para a rota
 * correspondente e a preferência salva apenas sugere a rota, nunca troca sozinha.
 */
(function () {
    "use strict";

    var STORAGE_KEY = "ink-agenda-vitrine-skin";
    var DISMISS_KEY = "ink-agenda-vitrine-skin-dismissed";
    var VALID = ["tattoo", "odontologia", "beleza"];
    var LABEL = {
        tattoo: "Tatuagem",
        odontologia: "Odontologia",
        beleza: "Beleza"
    };

    /* file:// não resolve diretório para index.html; no servidor a rota fica limpa. */
    function localRoute(route) {
        if (window.location.protocol === "file:" && /\/$/.test(route)) {
            return route + "index.html";
        }
        return route;
    }

    function normalize(value) {
        if (value === "dental") {
            return "odontologia";
        }
        if (value === "beauty") {
            return "beleza";
        }
        return VALID.indexOf(value) >= 0 ? value : null;
    }

    function readStored() {
        try {
            return normalize(localStorage.getItem(STORAGE_KEY));
        } catch (error) {
            return null;
        }
    }

    function store(segment) {
        try {
            localStorage.setItem(STORAGE_KEY, segment);
        } catch (error) {
            /* Sem armazenamento: a rota continua funcionando. */
        }
    }

    var current = normalize(document.documentElement.getAttribute("data-segment"));
    if (current) {
        store(current);
    }

    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-segment-target]"));

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var target = button.getAttribute("data-segment-target");
            var route = button.getAttribute("data-route");
            if (!route || target === current) {
                return;
            }
            window.location.href = localRoute(route);
        });

        button.addEventListener("keydown", function (event) {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                return;
            }
            event.preventDefault();
            var index = buttons.indexOf(button);
            var next = event.key === "ArrowRight" ? index + 1 : index - 1;
            if (next < 0) {
                next = buttons.length - 1;
            }
            if (next >= buttons.length) {
                next = 0;
            }
            buttons[next].focus();
        });
    });

    if (document.body.getAttribute("data-page") !== "home") {
        return;
    }

    var requested = new URLSearchParams(window.location.search).get("segmento");
    if (requested !== null) {
        var wanted = normalize(requested);
        var match = wanted && buttons.filter(function (button) {
            return button.getAttribute("data-segment-target") === wanted;
        })[0];
        if (match) {
            window.location.replace(localRoute(match.getAttribute("data-route")));
            return;
        }
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", window.location.pathname + window.location.hash);
        }
    }

    var stored = readStored();
    var banner = document.querySelector("[data-skin-suggestion]");
    if (!stored || !banner) {
        return;
    }
    var dismissed = null;
    try {
        dismissed = localStorage.getItem(DISMISS_KEY);
    } catch (error) {
        dismissed = null;
    }
    if (dismissed === stored) {
        return;
    }

    var link = banner.querySelector("[data-suggestion-link]");
    var text = banner.querySelector("[data-suggestion-text]");
    var targetButton = buttons.filter(function (button) {
        return button.getAttribute("data-segment-target") === stored;
    })[0];
    if (!link || !targetButton) {
        return;
    }

    link.setAttribute("href", localRoute(targetButton.getAttribute("data-route")));
    link.textContent = "Ver como " + LABEL[stored];
    if (text) {
        text.textContent = "Você já usou a vitrine em " + LABEL[stored] + ".";
    }
    banner.hidden = false;

    var dismiss = banner.querySelector("[data-suggestion-dismiss]");
    if (dismiss) {
        dismiss.addEventListener("click", function () {
            banner.hidden = true;
            try {
                localStorage.setItem(DISMISS_KEY, stored);
            } catch (error) {
                /* Sem armazenamento: a sugestão volta na próxima visita. */
            }
        });
    }
})();
