// control that shows markers
const TYPE_COMPANY = "company";
const TYPE_LOTE = "lote";
const ICON_LOTE = 'marker-icon-lote.png';
const ICON_COMPANY = 'marker-icon-compania.png';
const ICON_SHADOW = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';
var type = null;


function addEmptyMarker(coordinates, markerData) {
    var marker = this.createMarker(ICON_LOTE, coordinates);
    if (markerData != undefined) {
        marker.bindPopup(markerData.properties.info).openPopup();
    }
}

function addSpecificMarker(coordinates, loteName) {
    var marker = this.createMarker(ICON_LOTE, coordinates);
    data.features.forEach(polygon => {
        console.log(polygon.properties, "polygon.properties");

        if (polygon.properties.name == loteName) { console.log(polygon.properties.id, "hola"); }
    });
    //marker.bindPopup(markerData.properties.info).openPopup();
}

function addCompanyMarker(coordinates) {
    var marker = this.createMarker(ICON_LOTE, coordinates);
    if (marker.properties != undefined) {
        marker.bindPopup(marker.properties.name).openPopup();
    }
}

function addMarkers(show) {
    markers.forEach(markerData => {
        console.log(markerData);
        coordinatesUnsort = markerData.geometry.coordinates;
        coordinatesSortedOut = [coordinatesUnsort[1], coordinatesUnsort[0]];
        type = markerData.properties.type;
        switch (show) {
            case SHOW_COMPANY:
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut);
                }
                break;
            case SHOW_EMPTY:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut, markerData);
                }
                break;
            case SHOW_ALL:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut, markerData);
                }
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut);
                }
                break;
            default:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut, markerData);
                }
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut);
                }
                break;
        }
    });
}

function createMarker(iconUrl, coordinates) {
    var emptyIcon = this.createIcon(iconUrl);
    var marker = L.marker(coordinates, { icon: emptyIcon });
    marker.addTo(map);
    return marker;
}

function createIcon(iconUrl) {
    return new L.Icon({
        iconUrl: iconUrl,
        shadowUrl: ICON_SHADOW,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}