document.addEventListener('DOMContentLoaded', function () {
    const langBlock = document.querySelector('.lang');
    const langEn = document.querySelector('.lang__en');
    const langEs = document.querySelector('.lang__es');

    if (!langBlock || !langEn || !langEs) {
        return;
    }

    langEn.addEventListener('click', function (event) {
        event.stopPropagation();
        langBlock.classList.toggle('open');
    });

    document.addEventListener('click', function () {
        if (langBlock.classList.contains('open')) {
            langBlock.classList.remove('open');
        }
    });
});