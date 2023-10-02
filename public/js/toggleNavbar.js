(function () {
    // Select DOM elements
    var toggleBtn = document.querySelector('.burger');
    var menuContainer = document.querySelector('.menu-container');

    // Attach click event listener to the toggle button
    toggleBtn.addEventListener('click', function () {
        // Toggle the 'is-active' class on the toggle button to change its appearance
        toggleBtn.classList.toggle('is-active');

        // Toggle the 'is-active' class on the menu container to show/hide the menu
        menuContainer.classList.toggle('is-active');
    });
})();