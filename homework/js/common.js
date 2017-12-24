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
        center: {lat: 49.456, lng: 27.006},
        zoom: 8
    });
}

