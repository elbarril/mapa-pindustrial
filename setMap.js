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

function style(feature) {
    show = getShow();
    switch (show) {
        case SHOW_COMPANY:
            return {
                weight: 2,
                opacity: 1,
                color: feature.properties.name ? feature.properties.stroke : null,
                fillOpacity: 0.7,
                fillColor: feature.properties.name ? feature.properties.fill : null
            };
            break;
        case SHOW_EMPTY:
            return {
                weight: 2,
                opacity: 1,
                color: feature.properties.available ? feature.properties.stroke : null,
                fillOpacity: 0.7,
                fillColor: feature.properties.available ? feature.properties.fill : null
            };
            break;
        case SHOW_ALL:
            return {
                weight: 2,
                opacity: 1,
                color: feature.properties.stroke,
                fillOpacity: 0.7,
                fillColor: feature.properties.fill
            };
            break;

        default:
            break;
    }

}

map.attributionControl.addAttribution(
    'Datos de lotes del Parque Industrial &copy; <a href="http://prod.cdeluruguay.gob.ar/">Direccion de la Producción de Concepción del Uruguay</a>');