var map = L.map('map', {
    center: L.latLng(39.09461, -120),
    zoom: 11
});

var basemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

basemap.addTo(map);

cartodb.createLayer(map, {
    user_name: 'awilson1233',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM peaks'}]

})
.addTo(map)
