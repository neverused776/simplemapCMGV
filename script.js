var map;
var marker;

function movemap(x,y) {
    map.panTo(new google.maps.LatLng(parseFloat(x),parseFloat(y)));
  }   if (marker) {
    marker.setMap(null);
  }
  var latlng = new google.maps.LatLng(parseFloat(x),parseFloat(y));
  map.panTo(latlng);
  marker = new google.maps.Marker({
    position: latlng,
    map: map
  });

  
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.987716, lng: -96.751056 },
    mapTypeControl: true,
    mapTypeControlOptions: {
	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    zoomControl: true,
    zoomControlOptions: {
    	position: google.maps.ControlPosition.RIGHT_TOP
    },

    zoom: 15
  });
}
