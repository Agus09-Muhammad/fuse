    
    
    $(document).ready(function () {
        // Swiper: Slider-aboutus
        var swiper = new Swiper('.swiper-aboutus', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });