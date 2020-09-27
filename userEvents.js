function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}


function resetHighlight(e) {
    //geojson.resetStyle(e.target);
    e.target.setStyle({
        weight: e.target.feature.properties.width,
    });
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(mapData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

