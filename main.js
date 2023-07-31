"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const navMenu = document.querySelector("nav");

    menuToggle.addEventListener("click", toggleMenu);

    function toggleMenu() {
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
    }

    window.addEventListener("scroll", function () {
        if (!sidebar.classList.contains("open")) {
            header.classList.toggle("abajo", window.scrollY > 0);
        }
    });

    const cards = document.querySelectorAll(".cards");

    changeDescription(0);

    cards.forEach(function (card, index) {
        card.addEventListener("click", () => {
            changeDescription(index);
        });
    });
});

function changeDescription(index) {
    const cards = document.querySelectorAll(".cards");
    const descripcion = document.getElementById("descripcion");

    cards.forEach(function (card) {
        card.classList.remove("active");
    });

    cards[index].classList.add("active");

    switch (index) {
        case 0:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web Empresarial</h3><p class="parrafo-desc-servicios text-muted">Potencia tu presencia en línea con nuestras Paginas Web empresariales. Comunica la esencia de tu marca y muestra tus servicios o productos de forma efectiva. Si aún no cuentas con un sitio web, es el momento perfecto para tener una sólida presencia digital que impulse tu negocio.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloWebProto.png" alt="Imagen Desarrollo Web"  id="descripcionServicios0"></div>';
            break;
        case 1:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web E-commerce</h3><p class="parrafo-desc-servicios text-muted">Impulse su negocio con nuestro servicio de Páginas Web E-commerce. Diseñamos el mejor sitio de comercio electrónico para su empresa, optimizado para aumentar sus ventas. Aproveche esta oportunidad y potencie su presencia en línea con una plataforma de ventas efectiva y atractiva para sus clientes.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/ecomWebProto.png" alt="Imagen Ecommerce Web" id="descripcionServicios1"></div>';
            break;
        case 2:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Marketing Digital</h3><p class="parrafo-desc-servicios text-muted">Nuestro servicio de Marketing Digital ofrece una solución integral para su negocio. Desde SEO hasta diseño de sitios web, PPC, redes sociales, marketing por correo electrónico, chat instantáneo, análisis y seguimiento, marketing de video y desarrollo de marca. Potencie su presencia en línea y llegue a su audiencia de manera efectiva con nuestras estrategias personalizadas y resultados comprobados.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/mktDigitalProto.png" alt="Imagen Marketing Digital" id="descripcionServicios2"></div>';
            break;
        case 3:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">SEO</h3><p class="parrafo-desc-servicios text-muted">Experimente un SEO excepcional que emplea análisis avanzados y palabras clave estratégicas para atraer tráfico local relevante hacia su sitio web empresarial. Maximice su potencial de ventas y convierta su sitio en una verdadera máquina generadora de ingresos. Descubra cómo nuestro servicio de SEO puede impulsar su presencia en línea y posicionar su negocio en la cima de los resultados de búsqueda, captando la atención de su audiencia objetivo y asegurando un crecimiento constante.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/seoProto.png" alt="Imagen SEO" id="descripcionServicios3"></div>';
            break;
        case 4:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Branding</h3><p class="parrafo-desc-servicios text-muted">Nuestro servicio de Branding va más allá de crear un simple logo. Creemos en el poder de una marca sólida para atraer a los clientes, aumentar las ventas y generar lealtad a largo plazo. Con un enfoque integral y estratégico, creamos marcas que inspiran confianza, conectan emocionalmente con la audiencia y destacan en el mercado.<br>Examinamos meticulosamente cada aspecto de su marca, buscando diferencias únicas y oportunidades de crecimiento. Nuestro objetivo es transformar su negocio, expandir su alcance e impacto, y posicionarlo como un líder en su industria. Descubra cómo nuestro enfoque innovador en Branding puede llevar su negocio al siguiente nivel y generar un impacto duradero en la mente de los consumidores.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/brandingProto.png" alt="Imagen Branding" id="descripcionServicios4"></div>';
            break;
        case 5:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Desarrollo de Apps</h3><p class="parrafo-desc-servicios text-muted">Nuestro servicio de Desarrollo de Apps ofrece soluciones personalizadas para su empresa. Nuestro equipo altamente capacitado está listo para diseñar y desarrollar sitios web y aplicaciones que se adapten perfectamente a sus necesidades y objetivos comerciales.<br>Ya sea que necesite una aplicación móvil para su negocio, una plataforma de comercio electrónico o una herramienta interna para mejorar la productividad, estamos aquí para ayudarlo. Utilizamos las últimas tecnologías y enfoques innovadores para crear aplicaciones rápidas, seguras y fáciles de usar.<br>Confíe en nuestro equipo experto para llevar su visión a la realidad y proporcionarle una solución tecnológica que impulse el crecimiento y el éxito de su empresa en el mundo digital.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloAppsProto.png" alt="Imagen Desarrollo de Apps" id="descripcionServicios5"></div>';
            break;
        default:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web Empresarial</h3><p class="parrafo-desc-servicios text-muted">Potencia tu presencia en línea con nuestras Paginas Web empresariales. Comunica la esencia de tu marca y muestra tus servicios o productos de forma efectiva. Si aún no cuentas con un sitio web, es el momento perfecto para tener una sólida presencia digital que impulse tu negocio.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloWebProto.png" alt="Imagen Desarrollo Web"  id="descripcionServicios0"></div>';
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.cards-faq');

    toggleButtons.forEach((card) => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
            const faqAnswer = this.querySelector('.faq-answer');
            const h5 = this.querySelector('h5');
            const icon = this.querySelector('i');

            if (this.classList.contains('active')) {
                faqAnswer.classList.remove('hidden');
                h5.style.color = '#007ACC';
                icon.classList.remove('bi-plus-circle-fill');
                icon.classList.add('bi-dash-circle-fill');
            } else {
                faqAnswer.classList.add('hidden');
                h5.style.color = 'black';
                icon.classList.remove('bi-dash-circle-fill');
                icon.classList.add('bi-plus-circle-fill');
            }
        });
    });
});

