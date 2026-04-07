/**
 * Cara Core Ink Agenda — Delivery matriz (caracore.com.br/delivery/ink)
 */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var el = document.querySelector(id);
        if (el) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });

    document.querySelectorAll('[data-external-url]').forEach(function (element) {
        var url = element.getAttribute('data-external-url');
        if (!url) return;

        element.addEventListener('click', function () {
            window.location.assign(url);
        });
    });
})();
