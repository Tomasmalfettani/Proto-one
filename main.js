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
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web Empresarial</h3><p class="parrafo-desc-servicios text-muted">Si tu negocio aún no cuenta con un sitio web, entonces es hora de tener una presencia en línea que comunique la marca de tu empresa, así como que muestre información sobre servicios o productos.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloWebProto.png" alt="Imagen Desarrollo Web"  id="descripcionServicios0"></div>';
            break;
        case 1:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web E-commerce</h3><p class="parrafo-desc-servicios text-muted">¡Aproveche la oportunidad de utilizar nuestros servicios para diseñar el mejor sitio web de comercio electrónico para su empresa, ayudándole aún más a aumentar sus ventas!</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/ecomWebProto.png" alt="Imagen Ecommerce Web" id="descripcionServicios1"></div>';
            break;
        case 2:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Marketing Digital</h3><p class="parrafo-desc-servicios text-muted">Brindamos marketing digital completo, SEO, diseño de sitios web, PPC, redes sociales, marketing por correo electrónico, servicios de chat instantáneo, análisis y seguimiento, marketing de video y desarrollo de marca.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/mktDigitalProto.png" alt="Imagen Marketing Digital" id="descripcionServicios2"></div>';
            break;
        case 3:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">SEO</h3><p class="parrafo-desc-servicios text-muted">¡Un gran SEO aprovecha análisis poderosos y análisis de palabras clave para atraer tráfico local elegible al sitio web de su empresa, mejorar su potencial de ventas y convertirlo en una máquina de hacer dinero!</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/seoProto.png" alt="Imagen SEO" id="descripcionServicios3"></div>';
            break;
        case 4:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Branding</h3><p class="parrafo-desc-servicios text-muted">Los clientes compran más, gastan más y defienden los productos en los que creen. Se necesita un enfoque integrado para producir resultados y crear una marca exitosa.<br>Diseccionamos las actividades de una marca desde todos los ángulos para encontrar diferencias y puntos de enlace para construir oportunidades, cambiar empresas y aumentar el alcance e impacto de nuestros clientes.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/brandingProto.png" alt="Imagen Branding" id="descripcionServicios4"></div>';
            break;
        case 5:
            descripcion.innerHTML = '<div class="description-content"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Desarrollo de Apps</h3><p class="parrafo-desc-servicios text-muted">Si su empresa requiere una solución personalizada, nuestro equipo está capacitado para diseñar un sitio web o una aplicación que satisfaga sus necesidades.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloAppsProto.png" alt="Imagen Desarrollo de Apps" id="descripcionServicios5"></div>';
            break;
        default:
            descripcion.innerHTML = '<div class="description-content-2"><div><h2 class="titulo-desc-servicios-2">Servicio Destacado</h2><h3 class="titulo-desc-servicios">Pagina Web Empresarial</h3><p class="parrafo-desc-servicios text-muted">Si tu negocio aún no cuenta con un sitio web, entonces es hora de tener una presencia en línea que comunique la marca de tu empresa, así como que muestre información sobre servicios o productos.</p><a href="#" class="btn-descripcion">Más información</a></div><img src="img/desarrolloWebProto.png" alt="Imagen Desarrollo Web" id="descripcionServicios0"></div>';
            break;
    }
}