/*
 * Canal oficial do Ink Agenda: a versao e os links da loja vem da API
 * (api.caracore.com.br). Se a API estiver indisponivel ou bloquear a origem,
 * a pagina mantem o conteudo estatico publicado junto com a release.
 */
(function () {
    "use strict";

    var ENDPOINT = "https://api.caracore.com.br/releases/ink/latest.json";
    var RELEASES = "https://github.com/chmulato/caracore-ink-releases/releases";
    var TEMPO_LIMITE = 5000;

    function versaoValida(valor) {
        return typeof valor === "string" && /^\d+\.\d+\.\d+$/.test(valor);
    }

    /* Mesma politica do app: HTTPS, github.com/chmulato ou *.caracore.com.br. */
    function urlPermitida(valor) {
        var url;
        try {
            url = new URL(valor);
        } catch (erro) {
            return null;
        }
        if (url.protocol !== "https:") {
            return null;
        }
        var host = url.hostname.toLowerCase();
        if (host === "github.com") {
            return url.pathname.indexOf("/chmulato/") === 0 ? url.href : null;
        }
        return host === "caracore.com.br" || host.endsWith(".caracore.com.br") ? url.href : null;
    }

    function assetValido(assets, chave) {
        var asset = assets && assets[chave];
        if (!asset || !urlPermitida(asset.url)) {
            return null;
        }
        return asset;
    }

    function aplicar(dados) {
        var versao = dados.version;
        if (!versaoValida(versao)) {
            return;
        }
        var assets = dados.assets || {};

        document.querySelectorAll("[data-canal-versao]").forEach(function (elemento) {
            elemento.textContent = "v" + versao;
        });
        document.querySelectorAll("[data-canal-versao-semv]").forEach(function (elemento) {
            elemento.textContent = versao;
        });

        document.querySelectorAll("[data-canal-link]").forEach(function (elemento) {
            var tipo = elemento.getAttribute("data-canal-link");
            var destino = null;
            if (tipo === "release") {
                destino = RELEASES + "/tag/v" + versao;
            } else if (tipo === "checksums") {
                destino = RELEASES + "/download/v" + versao + "/checksum.sha256";
            } else {
                var asset = assetValido(assets, tipo);
                destino = asset ? asset.url : null;
            }
            if (destino) {
                elemento.setAttribute("href", destino);
            }
        });

        document.querySelectorAll("[data-canal-sha]").forEach(function (elemento) {
            var asset = assetValido(assets, elemento.getAttribute("data-canal-sha"));
            if (asset && /^[0-9a-fA-F]{64}$/.test(asset.sha256 || "")) {
                elemento.textContent = asset.sha256.toLowerCase();
            }
        });

        document.querySelectorAll("[data-canal-apt]").forEach(function (elemento) {
            var asset = assetValido(assets, "linux-deb");
            if (asset) {
                elemento.textContent = "sudo apt install ./" + asset.url.split("/").pop();
            }
        });

        document.querySelectorAll("[data-versao]").forEach(function (linha) {
            if (linha.getAttribute("data-versao") !== versao) {
                return;
            }
            linha.classList.add("is-atual");
            var status = linha.querySelector("[data-canal-status]");
            if (status) {
                status.textContent = "Atual";
            }
        });
    }

    async function carregar() {
        var controle = new AbortController();
        var limite = setTimeout(function () {
            controle.abort();
        }, TEMPO_LIMITE);
        try {
            var resposta = await fetch(ENDPOINT, {
                cache: "no-store",
                signal: controle.signal,
                headers: { Accept: "application/json" }
            });
            if (!resposta.ok) {
                return;
            }
            aplicar(await resposta.json());
        } catch (erro) {
            /* Mantem o conteudo estatico da pagina. */
        } finally {
            clearTimeout(limite);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", carregar);
    } else {
        carregar();
    }
})();
