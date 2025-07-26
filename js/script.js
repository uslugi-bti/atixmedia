document.addEventListener("DOMContentLoaded", function () {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    const headerMenu = document.querySelector(".header-top__menu");
    const headerList = document.querySelector(".header-bottom__list");

    headerMenu.addEventListener("click", function () {
        headerList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".header-bottom__list") && !event.target.closest(".header-top__menu")) {
            headerList.classList.remove("active");
        }
    });

    if (document.querySelector(".slider.static .swiper")) {
        const swiper = new Swiper('.slider.static .swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 8,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                },
                970: {
                    slidesPerView: 3,
                },
            },
        });
    }

    if (document.querySelector(".slider.professoinal .swiper")) {
        const swiper = new Swiper('.slider.professoinal .swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 8,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                },
                970: {
                    slidesPerView: 4,
                },
            },
        });
    }
});