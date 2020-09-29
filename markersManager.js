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
function addEmptyMarker(coordinates) {
    var emptyIcon = new L.Icon({
        iconUrl: 'marker-icon-lote.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var marker = L.marker(coordinates, { icon: emptyIcon });
    marker.addTo(map);
    if (type === TYPE_LOTE) {
        marker.bindPopup("Lote disponible ").openPopup();

    }

}
function addCompanyMarker(coordinates) {
    var companyIcon = new L.Icon({
        iconUrl: 'marker-icon-compania.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var marker = L.marker(coordinates, { icon: companyIcon });
    marker.addTo(map);

}
function addMarkers(show) {
    markers.forEach(marker => {
        coordinatesUnsort = marker.geometry.coordinates;
        coordinatesSortedOut = [coordinatesUnsort[1], coordinatesUnsort[0]];
        type = marker.properties.type;
        switch (show) {
            case SHOW_COMPANY:
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut);
                }
                break;
            case SHOW_EMPTY:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut);
                }
                break;
            case SHOW_ALL:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut);
                }
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut);
                }
                break;
            default:
                break;
        }
    });
}