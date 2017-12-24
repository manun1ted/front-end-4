'use strict'

$(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
    });
});


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.89378, lng: -77.1546626 },
        zoom: 8
    });
}

