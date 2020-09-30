function style(feature) {
    show = getShow();
    switch (show) {
        case SHOW_COMPANY:            
            feature.type = feature.properties.type == "company" ? "feature" : null;
            return {
                weight: feature.properties.width,
                opacity: 1,
                color: feature.properties.type && feature.properties.type == "company" || feature.properties.available=="false" ? feature.properties.stroke : null,
                fillOpacity: feature.properties.fillOpacity,
                fillColor: feature.properties.type && feature.properties.type == "company" ? feature.properties.fill : null
            };
            break;
        case SHOW_EMPTY:
            feature.type = feature.properties.type == "lote" ? "feature" : null;
            return {
                weight: feature.properties.width,
                opacity: 1,
                color: feature.properties.available ? feature.properties.stroke : null,
                fillOpacity: feature.properties.fillOpacity,
                fillColor: feature.properties.available ? feature.properties.fill : null
            };
            break;
        case SHOW_ALL:
            feature.type = 'feature';
            return {
                weight: feature.properties.width,
                opacity: 1,
                color: feature.properties.stroke,
                fillOpacity: feature.properties.fillOpacity,
                fillColor: feature.properties.fill
            };
            break;

        default:            
            break;
    }
}