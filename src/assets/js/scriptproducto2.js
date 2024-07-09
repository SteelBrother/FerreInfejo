$(document).ready(function () {
    function applyElevateZoom() {
        if (window.innerWidth > 450) { // Ajusta el valor a la anchura que consideres apropiada
            $("#main-image").elevateZoom({
                scrollZoom: true
            });
        } else {
            if ($('.zoomContainer').length > 0) {
                // Remueve el zoom si ya estaba aplicado
                $('.zoomContainer').remove();
                $('#main-image').removeData('elevateZoom');
            }
        }
    }

    // Aplica el zoom al cargar la página
    applyElevateZoom();

    // Aplica o remueve el zoom al redimensionar la ventana
    $(window).resize(function () {
        applyElevateZoom();
    });

    // Resto del código
    $('#burger').click(function () {
        $('#nava').slideToggle();
        $('#searchform').slideUp();
        $('#mega-menu').slideUp();
    });

    $('#search-click').click(function () {
        $('#mega-menu').slideUp();
        $('#nava').slideUp();
        $('#searchform').slideToggle();
    });

    $('#search-click-list').click(function () {
        $('#mega-menu').slideUp();
        $('#searchform').slideToggle();
    });

    $('#mega-menu-btn').click(function () {
        $('#searchform').slideUp();
        $('#mega-menu').slideToggle();
    });

    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.side-picture').click(function () {
        var showing = $(this).find("img").attr("src");
        $('.side-picture').removeClass('active');
        $(this).addClass('active');
        $('#main-image').fadeOut(function () {
            $(this).attr('src', showing);
            $(this).fadeIn();
            applyElevateZoom(); // Aplica el zoom si la imagen principal cambia
        });
    });

    // Comentado para Swiper Slider
    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: 'vertical',
    //     loop: true,
    //     pagination: '.swiper-pagination',
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     scrollbar: '.swiper-scrollbar'
    // });
});
