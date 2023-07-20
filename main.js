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

const cards = document.querySelectorAll('.cards');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('active');
        });

        card.classList.add('active');
    });
});

function changeDescription(index) {
    var cards = document.querySelectorAll('.cards');
    var descripcion = document.getElementById('descripcion');

    cards.forEach(function (card) {
        card.classList.remove('active');
    });

    cards[index].classList.add('active');

    switch (index) {
        case 0:
            descripcion.innerHTML = '<h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p>';
            break;
        case 1:
            descripcion.innerHTML = '<h3>Descripción del servicio 2</h3><p>Aquí va la descripción del servicio 2.</p>';
            break;
        case 2:
            descripcion.innerHTML = '<h3>Descripción del servicio 3</h3><p>Aquí va la descripción del servicio 3.</p>';
            break;
        case 3:
            descripcion.innerHTML = '<h3>Descripción del servicio 4</h3><p>Aquí va la descripción del servicio 4.</p>';
            break;
        case 4:
            descripcion.innerHTML = '<h3>Descripción del servicio 5</h3><p>Aquí va la descripción del servicio 5.</p>';
            break;
        case 5:
            descripcion.innerHTML = '<h3>Descripción del servicio 6</h3><p>Aquí va la descripción del servicio 6.</p>';
            break;
        default:
            descripcion.innerHTML = '<h3>Descripción del servicio 1</h3><p>Aquí va la descripción del servicio 1.</p>';
            break;
    }

}