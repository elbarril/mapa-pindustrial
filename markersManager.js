// control that shows markers
const TYPE_COMPANY = "company";
const TYPE_LOTE = "lote";
const ICON_LOTE = 'marker-icon-lote.png';
const ICON_COMPANY = 'marker-icon-compania.png';
const ICON_SHADOW = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';
var type = null;

function drawInfo(markerData) {
    if (markerData != undefined && markerData.properties.name != undefined) {
        var name = markerData.properties.name;
        name = name.split(/[ &m]/);
        newName =
            'Lote '
            .concat(name[0]
                .concat(' M')
                .concat(name[1])
            );
        var props = {
            "name": newName
        }
        info.update(props);
    }
}

function addEmptyMarker(coordinates, markerData) {
    var marker = this.createMarker(ICON_LOTE, coordinates);
    this.drawPopup(marker, markerData);
    marker.on("click", function(event) {
        drawInfo(markerData);
        map.setView(event.latlng, 18);
    });
}

function drawPopup(marker, markerData) {
    if (markerData != undefined) {
        marker.bindPopup(markerData.properties.info).openPopup();
    }
}

function addSpecificMarker(coordinates, loteName) {
    var marker = this.createMarker(ICON_LOTE, coordinates);
    this.addMarkers(SHOW_EMPTY);
    markers.forEach(markerData => {
        if (markerData.properties.name == loteName) {
            marker.bindPopup(markerData.properties.info).openPopup();
            this.drawInfo(markerData);
        }
    });
}

function addCompanyMarker(coordinates, markerData) {
    var marker = this.createMarker(ICON_COMPANY, coordinates);
    marker.on("click", function(event) {
        map.setView(event.latlng, 18);
    });
}

function addMarkers(show) {
    markers.forEach(markerData => {
        coordinatesUnsort = markerData.geometry.coordinates;
        coordinatesSortedOut = [coordinatesUnsort[1], coordinatesUnsort[0]];
        type = markerData.properties.type;
        switch (show) {
            case SHOW_COMPANY:
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut, markerData);
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
                    this.addCompanyMarker(coordinatesSortedOut, markerData);
                }
                break;
            default:
                if (type === TYPE_LOTE) {
                    this.addEmptyMarker(coordinatesSortedOut, markerData);
                }
                if (type === TYPE_COMPANY) {
                    this.addCompanyMarker(coordinatesSortedOut, markerData);
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