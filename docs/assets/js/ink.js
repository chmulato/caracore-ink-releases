/**
 * CaraCore Ink Agenda — comportamentos comuns da loja.
 */
(function () {
    "use strict";

    function copyText(value) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(value);
        }
        return new Promise(function (resolve, reject) {
            var field = document.createElement("textarea");
            field.value = value;
            field.setAttribute("readonly", "");
            field.style.position = "fixed";
            field.style.left = "-9999px";
            document.body.appendChild(field);
            field.select();
            try {
                document.execCommand("copy") ? resolve() : reject(new Error("copy"));
            } catch (error) {
                reject(error);
            } finally {
                document.body.removeChild(field);
            }
        });
    }

    document.addEventListener("click", function (event) {
        var button = event.target.closest("[data-copy-target]");
        if (button) {
            var target = document.querySelector(button.getAttribute("data-copy-target"));
            if (!target) {
                return;
            }
            var value = target.textContent.trim();
            copyText(value).then(function () {
                var original = button.getAttribute("data-label") || button.textContent;
                button.setAttribute("data-label", original);
                button.textContent = "Copiado!";
                button.classList.add("is-copied");
                window.setTimeout(function () {
                    button.textContent = original;
                    button.classList.remove("is-copied");
                }, 2000);
            }).catch(function () {
                button.textContent = "Selecione e copie";
            });
            return;
        }

        var external = event.target.closest("[data-external-url]");
        if (external) {
            event.preventDefault();
            window.location.href = external.getAttribute("data-external-url");
        }
    });
})();
