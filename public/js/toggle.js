document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.dropdown');

    elements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.stopPropagation();
            element.classList.toggle('is-active');
        });
    });
});
