
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


geocode("5100 Belt Line Rd Ste 520, Dallas, TX 75254", mapboxToken)
    .then(function(result){
        console.log(result)
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: result, // starting position [lng, lat]
            zoom: 15 // starting zoom

            var marker = new mapboxgl.Marker()
                .setLngLat([-96.821420,32.952160)
                .addTo(map);

        });
    });





//
// var pluckersPopup = new mapboxgl.Popup(result)
//     .setHTML("<p> Pluckers Wings and Bar</p>")
//     .addTo(map)
//
// marker.setPopup(pluckersPopup)