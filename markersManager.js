// control that shows markers
const TYPE_COMPANY = "company";
const TYPE_LOTE = "lote";
var type = null;


function addMarker(coordinates) {
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var marker = L.marker(coordinates, { icon: greenIcon });
    marker.addTo(map);
    if (type === TYPE_LOTE) {
        marker.bindPopup("Lote disponible ").openPopup();

    }

}

function addMarkers(show) {
    markers.forEach(marker => {
        coordinatesUnsort = marker.geometry.coordinates;
        coordinatesSortedOut = [coordinatesUnsort[1], coordinatesUnsort[0]];
        type = marker.properties.type;
        switch (show) {
            case SHOW_COMPANY:
                if (type === TYPE_COMPANY) {
                    this.addMarker(coordinatesSortedOut);
                }
                break;
            case SHOW_EMPTY:
                if (type === TYPE_LOTE) {
                    this.addMarker(coordinatesSortedOut);
                }
                break;
            case SHOW_ALL:
                this.addMarker(coordinatesSortedOut);
                break;
            default:
                break;
        }
    });
}