$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        loop: true,
        dots: true,
        items: 1,
        center: true,
        autoplayTimeout: 5000,
    });

    $('.slider_arrow_left').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.slider_arrow_right').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $("a").click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        var element = $($(this).attr("href"));
        var header = $(".header");
        var offset = element.offset().top - header.height();
        body.stop().animate({scrollTop: offset}, 500, 'swing');
        $("#btn-nav").click();
    });

    $(".block").each(function () {
        var $this = $(this);
        var position = $this.position();
        $(this).scrollspy({
            min: position.top - 500,
            max: position.top + $this.height() - 500,
            onEnter: function(element, position) {
                $(".nav_element").removeClass("nav_active");
                $(".nav_element:eq(" + $this.index() + ")").addClass("nav_active");
            },
        });
    });

    var mapItems = [".map_shop", ".map_bank", ".map_parking", ".map_busstop", ".map_cafe"];
    var mapIndex = 1;
    var delta = 2000;

    function showItems() {
        $(mapItems[mapIndex - 1]).fadeIn();
        $(".phone_" + mapIndex).css("display", "none");
        $(".phone_" + (mapIndex + 1)).fadeIn();
        mapIndex++;
        if (mapIndex == mapItems.length + 1) {
            setTimeout(clearMap, delta);
        } else {
            setTimeout(showItems, delta);
        }
    }

    function clearMap() {
        for (var i = 0; i < mapItems.length; i++) {
            $(mapItems[i]).fadeOut();
        }
        $(".phone_" + (mapItems.length + 1)).css("display", "none");
        $(".phone_1").fadeIn();
        mapIndex = 1;
        setTimeout(showItems, delta);
    }

    setTimeout(showItems, delta);
});