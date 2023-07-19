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

const descriptionContainer = document.querySelector('.description-container');
const cards = document.querySelectorAll('.cards');

function toggleDescription(index) {
    if (descriptionContainer.classList.contains('show') && descriptionContainer.dataset.cardIndex === index.toString()) {
        descriptionContainer.classList.remove('show');
        descriptionContainer.innerHTML = '';
    } else {
        descriptionContainer.innerHTML = getDescription(index);
        descriptionContainer.dataset.cardIndex = index.toString();
        descriptionContainer.classList.add('show');
    }
}

function getDescription(index) {
    const descriptions = [
        '<div class="description-content">' +
        '<div class="description-image">' +
        '<img src="img/desarrolloWebProto.png" alt="Desarrollo Web Empresarial" class="foto-cards">' +
        '</div>' +
        '<div class="description-text">' +
        '<h3>Pagina Web Empresarial</h3>' +
        '<p>If your business does not yet have a website, then it is time to have an online presence that communicates the brand of your company, as well as that displays information about services or products.</p>' +
        '</div>' +
        '</div>',
        '<div class="description-content">' +
        '<div class="description-image">' +
        '<img src="" alt="">' +
        '</div>' +
        '<div class="description-text">' +
        '<p>Descripción del servicio 2</p>' +
        '</div>' +
        '</div>',
        // Agrega más descripciones aquí
    ];

    return descriptions[index];
}