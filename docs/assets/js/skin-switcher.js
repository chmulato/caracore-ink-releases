/*
 * Vitrine metamórfica do Ink Agenda: alterna o vocabulário e os acentos da
 * página sem recarregar. Não interfere em release-channel.js: os elementos
 * data-canal-* continuam sendo atualizados pela API do canal.
 */
(function () {
    "use strict";

    var STORAGE_KEY = "ink-agenda-vitrine-skin";
    var DEFAULT_SKIN = "tattoo";

    var HERO_IMAGES = {
        tattoo: {
            src: "assets/img/caracore_ink.png",
            alt: "Tatuadora organizando a agenda do estúdio no computador"
        },
        dental: {
            src: "assets/img/caracore_dental.png",
            alt: "Dentista organizando a agenda do consultório no tablet"
        },
        beauty: {
            src: "assets/img/caracore_beauty.png",
            alt: "Profissional de estética e beleza organizando a agenda do espaço"
        }
    };

    var SKINS = {
        tattoo: {
            workspace: "Estúdio",
            sessions: "Sessões",
            client: "cliente",
            clients: "clientes",
            "session-plural": "Sessões",
            "client-plural": "Clientes",
            target: "Tatuadores",
            appointments: "Atendimentos",
            appointment: "atendimento",
            "window-title": "Ink Agenda 2.1.0 — Estúdio",
            procedure: "Sessão de fechamento de braço — R$ 800,00"
        },
        dental: {
            workspace: "Consultório",
            sessions: "Consultas",
            client: "paciente",
            clients: "pacientes",
            "session-plural": "Consultas",
            "client-plural": "Pacientes",
            target: "Odontologia",
            appointments: "Consultas",
            appointment: "consulta",
            "window-title": "Ink Agenda 2.1.0 — Consultório",
            procedure: "Consulta de clareamento a laser — R$ 650,00"
        },
        beauty: {
            workspace: "Espaço",
            sessions: "Procedimentos",
            client: "cliente",
            clients: "clientes",
            "session-plural": "Procedimentos",
            "client-plural": "Clientes",
            target: "Beleza & Estética",
            appointments: "Procedimentos",
            appointment: "procedimento",
            "window-title": "Ink Agenda 2.1.0 — Espaço",
            procedure: "Procedimento de mechas e cronograma — R$ 720,00"
        }
    };

    function normalizeSkin(value) {
        return Object.prototype.hasOwnProperty.call(SKINS, value) ? value : DEFAULT_SKIN;
    }

    function readStoredSkin() {
        try {
            return normalizeSkin(window.localStorage.getItem(STORAGE_KEY));
        } catch (error) {
            return DEFAULT_SKIN;
        }
    }

    function persistSkin(skin) {
        try {
            window.localStorage.setItem(STORAGE_KEY, skin);
        } catch (error) {
            /* Navegação privada ou origem opaca: o tema vale só nesta visita. */
        }
    }

    function applyTerms(skin) {
        var terms = SKINS[skin];
        document.querySelectorAll("[data-term]").forEach(function (element) {
            var value = terms[element.getAttribute("data-term")];
            if (typeof value !== "string") {
                return;
            }
            element.textContent = element.getAttribute("data-term-case") === "lower"
                ? value.toLocaleLowerCase("pt-BR")
                : value;
        });
    }

    function syncButtons(skin) {
        document.querySelectorAll("[data-skin-btn]").forEach(function (button) {
            var active = button.getAttribute("data-skin-btn") === skin;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    var heroSwapToken = 0;

    function preloadImages() {
        Object.keys(HERO_IMAGES).forEach(function (skin) {
            var image = new Image();
            image.src = HERO_IMAGES[skin].src;
        });
    }

    function syncHeroImage(skin, animate) {
        var heroImg = document.querySelector(".hero-contexto-image");
        var target = HERO_IMAGES[skin];
        if (!heroImg || !target) {
            return;
        }

        var token = ++heroSwapToken;

        if (heroImg.getAttribute("src") === target.src) {
            heroImg.alt = target.alt;
            heroImg.classList.remove("is-fading");
            return;
        }

        if (!animate) {
            heroImg.classList.remove("is-fading");
            heroImg.src = target.src;
            heroImg.alt = target.alt;
            return;
        }

        heroImg.classList.add("is-fading");
        window.setTimeout(function () {
            if (token !== heroSwapToken) {
                return;
            }
            heroImg.src = target.src;
            heroImg.alt = target.alt;
            var reveal = function () {
                if (token !== heroSwapToken) {
                    return;
                }
                heroImg.classList.remove("is-fading");
            };
            if (heroImg.complete) {
                window.requestAnimationFrame(reveal);
            } else {
                heroImg.addEventListener("load", reveal, { once: true });
                heroImg.addEventListener("error", reveal, { once: true });
            }
        }, 250);
    }

    function applySkin(value, persist, animate) {
        var skin = normalizeSkin(value);
        document.body.dataset.activeSkin = skin;
        applyTerms(skin);
        syncButtons(skin);
        syncHeroImage(skin, Boolean(animate));
        if (persist) {
            persistSkin(skin);
        }
    }

    function init() {
        preloadImages();

        document.querySelectorAll("[data-skin-btn]").forEach(function (button) {
            button.addEventListener("click", function () {
                applySkin(button.getAttribute("data-skin-btn"), true, true);
            });
        });

        applySkin(readStoredSkin(), false, false);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
