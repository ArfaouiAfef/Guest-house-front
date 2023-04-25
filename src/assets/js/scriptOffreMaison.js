/* function toggleHeartById(id) {
  const heartIcon = document.querySelector(`#${id} i`);
  heartIcon.classList.toggle('clicked');
} */

const heartIcons = document.querySelectorAll('.heart-icon');
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener('click', () => {
    const id = heartIcon.getAttribute('id');
    toggleHeartById(id);
  });
});

 var multipleCardCarousel = document.querySelector(
        "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
	
	var slider = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 60,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    }
});

 var splide = new Splide('.splide', {
        perPage: 5,
        rewind: true,
        gap: '1rem',
        pagination: false,
        arrows: true,
        breakpoints: {
            992: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            576: {
                perPage: 2,
            }
        }
    });

    splide.mount();
	
	