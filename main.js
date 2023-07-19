document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    var menuToggle = document.querySelector(".menu-toggle");
    var sidebar = document.querySelector(".sidebar");
    var navMenu = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        menuToggle.classList.toggle("open");
        navMenu.classList.toggle("menu-open");

        if (sidebar.classList.contains("open")) {
            if (!header.classList.contains("abajo")) {
                header.classList.add("abajo");
            }
            menuToggle.innerHTML = '<i class="bi bi-x"></i>';
        } else {
            if (window.scrollY === 0) {
                header.classList.remove("abajo");
            }
            menuToggle.innerHTML = '<i class="bi bi-list"></i>';
        }
    });

    window.addEventListener("scroll", function () {
        if (!sidebar.classList.contains("open")) {
            header.classList.toggle("abajo", window.scrollY > 0);
        }
    });
});