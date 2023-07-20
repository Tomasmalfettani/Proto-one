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

    var contentClass = index % 2 === 0 ? 'description-enter-right' : 'description-enter-left';
    descripcion.classList.remove('description-enter-left', 'description-enter-right');
    descripcion.classList.add(contentClass);

    switch (index) {
        case 0:
            descripcion.innerHTML = '<div class="description-content-2"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/desarrolloWebProto.png" alt="Imagen Desarrollo Web"></div>';
            break;
        case 1:
            descripcion.innerHTML = '<div class="description-content"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/ecomWebProto.png" alt="Imagen Ecommerce Web"></div>';
            break;
        case 2:
            descripcion.innerHTML = '<div class="description-content-2"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/mktDigitalProto.png" alt="Imagen Marketing Digital"></div>';
            break;
        case 3:
            descripcion.innerHTML = '<div class="description-content"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/seoProto.png" alt="Imagen SEO"></div>';
            break;
        case 4:
            descripcion.innerHTML = '<div class="description-content-2"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/brandingProto.png" alt="Imagen Branding"></div>';
            break;
        case 5:
            descripcion.innerHTML = '<div class="description-content"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/desarrolloAppsProto.png" alt="Imagen Desarrollo de Apps"></div>';
            break;
        default:
            descripcion.innerHTML = '<div class="description-content-2"><div><h3>Descripción del servicio 1</h3><p>LLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime, iste ut quia et minimaoptio deserunt rem quis perspiciatis harum esse cum ratione est reiciendis eius, vero, molestiasplaceat.</p></div><img src="img/desarrolloWebProto.png" alt="Imagen 1"></div>';
            break;
    }

}