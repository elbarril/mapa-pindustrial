function style(feature) {
    show = getShow();
    switch (show) {
        case SHOW_COMPANY:
            return {
                weight: feature.properties.width,
                opacity: 1,
                color: feature.properties.type && feature.properties.type == "company" ? feature.properties.stroke : null,
                fillOpacity: 0.7,
                fillColor: feature.properties.type && feature.properties.type == "company" ? feature.properties.fill : null
            };
            break;
        case SHOW_EMPTY:
            return {
                weight: feature.properties.width,
                opacity: 1,
                color: feature.properties.available ? feature.properties.stroke : null,
                fillOpacity: 0.7,
                fillColor: feature.properties.available ? feature.properties.fill : null
            };
            break;
        case SHOW_ALL:
            return {
                weight: feature.properties.width,
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