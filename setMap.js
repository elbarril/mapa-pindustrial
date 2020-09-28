var mapData = data;
var geojson;
var map = L.map('map').setView([-32.496, -58.305], 14);
L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }
).addTo(map);

geojson = L.geoJson(mapData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

map.attributionControl.addAttribution(
    'Datos de lotes del Parque Industrial &copy; <a href="http://prod.cdeluruguay.gob.ar/">Direccion de la Producción de Concepción del Uruguay</a>'
);