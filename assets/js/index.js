
/*------smoothScroll---*/

$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $('html, body').animate({
                scrollTop: $(gato).offset().top - 100,
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });
});


/*---------Selectores de etiqueta---*/
$(document).ready(function () {
    $("h3").click(function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });
});


/*--------------Selectores de clase----*/
$(document).ready(function () {
    $(".card-text1").click(function () {
        $("p.card-text1").hide();
    });
    $("#foto1").click(function () {
        $("p.card-text1").show();
    });
    $(".card-text2").click(function () {
        $("p.card-text2").hide();
    });
    $("#foto2").click(function () {
        $("p.card-text2").show();
    });
    $(".card-text3").click(function () {
        $("p.card-text3").hide();
    });
    $("#foto3").click(function () {
        $("p.card-text3").show();
    });
});

/*------------Tooltip-----*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})