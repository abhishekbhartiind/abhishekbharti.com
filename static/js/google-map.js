function initializeMap() {

	var markerTitle = 'Cerres template location',
		latitude = 48.23408,
		longitude = 11.68304,
		contentString = '<div id="content">'+
		'<h4 id="firstHeading" class="firstHeading">Cerres template location</h4>'+
		'<div id="bodyContent">'+
			'<p>Cerres is a nice and modern Bootstrap 3 template which is built by a very pasionate and optimistic team.</p>' +
		'</div>'+
	'</div>';


	var mapCanvas = document.getElementById('Googlemap');

	var featureOpts = [
		{
			"featureType":"landscape",
			"stylers": [{
				"saturation": -100
			},{
				"lightness": 65
			},{
				"visibility": "on"
			}]
		},{
			"featureType":"poi",
			"stylers": [{
				"saturation": -100
			},{
				"lightness":51
			},{
				"visibility":"simplified"
			}]
		},{
			"featureType":"road.highway",
			"stylers":[{
				"saturation":-100
			},{
				"visibility":"simplified"
			}]
		},{
			"featureType":"road.arterial",
			"stylers":[{
				"saturation":-100
			},{
				"lightness":30
			},{
				"visibility":"on"
			}]
		},{
			"featureType":"road.local",
			"stylers":[{
				"saturation":-100
			},{
				"lightness":40
			},{
				"visibility":"on"
			}]
		},{
			"featureType":"transit",
			"stylers":[{
				"saturation":-100
			},{
				"visibility":"simplified"
			}]
		},{
			"featureType":"administrative.province",
			"stylers":[{
				"visibility":"off"
			}]
		},{
			"featureType":"water",
			"elementType":"labels",
			"stylers":[{
				"visibility":"on"
			},{
				"lightness":-25
			},{
				"saturation":-100
			}]
		},{
			"featureType":"water",
			"elementType":"geometry",
			"stylers":[{
				"hue":"#ffff00"
			},{
				"lightness":-25
			},{
				"saturation":-97
			}]
		}
	];

	var mapOptions = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scaleControl: false,
		scrollwheel: false,
		mapTypeId: 'map_styles'
	}

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var styledMapOptions = {
		name: 'Cerres Map'
	};

	var CerresRoadMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set('cerresmap', CerresRoadMapType);
	map.setMapTypeId('cerresmap');

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 300
	});

	var image = 'img/marker.png';
	var myLatLng = new google.maps.LatLng(latitude, longitude);
	var placeMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image,
		title: markerTitle
	});

	google.maps.event.addListener(placeMarker, 'click', function() {
		infowindow.open(map,placeMarker);
	});

}
google.maps.event.addDomListener(window, 'load', initializeMap);