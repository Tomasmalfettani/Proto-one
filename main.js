document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    var menuToggle = document.querySelector(".menu-toggle");
    var sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });

    window.addEventListener("scroll", function () {
        header.classList.toggle("abajo", window.scrollY > 0);
    });
});
