/*==================== zoom out image ====================*/


let controller = new ScrollMagic.Controller();
let zoomHeader = TweenMax.to("#header", 0.9, { opacity: 1, scale: 0.35, ease: Circ.EaseIn });
let headerZoom = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0,
        duration: "3000ms"
    })
    .setPin('#header')
    .setClassToggle('#header')
    .setTween(zoomHeader)

.addTo(controller);

/*==================== smooth link scrooling====================*/
let $root = $('html, body');

$('a[href^="#"]').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});


/*==================== Change opacity image ====================*/
$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();

    $('#hero-ui').css({
        opacity: function() {
            let elementHeight = $(this).height();
            return 1 - (elementHeight - scrollTop) / elementHeight;
        }
    });
});