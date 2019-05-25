;(function() {
	"use strict";
	let hotSlider = $('.ba-hot-slider');
	let hotSliderImages = $('.ba-hot-slider-images');

	hotSlider.slick({
		infinite: false,
		prevArrow: $('[data-hot-prev]'),
		nextArrow: $('[data-hot-next]'),
		asNavFor: hotSliderImages
	});

	hotSliderImages.slick({
		infinite: false,
		arrows: false,
		asNavFor: hotSlider,
		fade: true
	});

	let bestSlider = $('#best');

	bestSlider.slick({
		slide: '.ba-offer',
		infinite: false,
		prevArrow: bestSlider.find('[data-prev]'),
		nextArrow: bestSlider.find('[data-next]')
	});
	//change
	let currentSlideEl = $('[data-current-offer]');
	let totalSlideEl = $('[data-total-offer]');

	let slidesCount = $('.ba-offer').length;

	slidesCount = slidesCount < 10 ? + slidesCount : slidesCount;

	currentSlideEl.text();
	totalSlideEl.text(slidesCount);

	bestSlider.on('beforeChange', (slick, currentSlide, nextSlide) =>{
		nextSlide++;
		nextSlide = nextSlide < 10 ? '0' + nextSlide : nextSlide;
		currentSlideEl.text(nextSlide);
	});
	
	//Mob nav toggle
	const menuToggleBtn = $('.ba-menu-toggle, .ba-overlay');
	const mobNav = $('.ba-mob-nav');

	menuToggleBtn.on('click', () => mobNav.toggleClass('ba-open'));

	//Add map
		function initMap() {
			//Create map and asign to this baMap var
			let mapCenter = {
				lat: 41.902782,
				lng: 12.496365
			};
			let baMap = new google.maps.Map(document.getElementById('ba-map'), {
			center: mapCenter,
			zoom: 9,
			styles:
			[
				{
					"featureType": "all",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#2b3638"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#2b3638"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#24282b"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#24282b"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			],
		  
		  });

		  

		  let cities = {
			rome: {lat: 41.902782,lng: 12.496365},
			leon: {lat: 43.902782,lng: -1.496365},
			cuenca: {lat: 40.902782,lng: -2.496365},
			kiev: {lat:50,lng:30.5}
		  };
		  let mapMarkers = {};

		  for(let city in cities){
			
			let marker = new google.maps.Marker(
				{
					position: cities[city],
					 map: baMap,
					 icon: 'img/marker.svg'	
				  }
			  );
			  let infowindow = new google.maps.InfoWindow({
				content: '<b>' + city + '</b>'
			  });
			  infowindow.open(baMap, marker);

			  mapMarkers[city] = marker;
		  }
		  // The marker, positioned at Uluru
		  

		  baMap.setCenter(mapCenter);

		  $('#city-select').on('change', function (e) {
			  baMap.panTo(cities[this.value]);
		  })
		}
		$(document).ready(function (e){
			initMap();
		});


})();
