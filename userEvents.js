function highlightFeature(e) {
    var layer = e.target;
    if (e.target.feature.geometry.type === "Polygon") {
        layer.setStyle({
            weight: 5,
            fillOpacity: 0.7
        });
    } else if (e.target.feature.geometry.type === "Point") {
        return;
    }


    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}


function resetHighlight(e) {
    //geojson.resetStyle(e.target);
    if (e.target.feature.geometry.type === "Polygon") {
        e.target.setStyle({
            weight: e.target.feature.properties.width,
            fillOpacity: e.target.feature.properties.fillOpacity
        });
    } else if (e.target.feature.geometry.type === "Point") {
        return;
    }

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