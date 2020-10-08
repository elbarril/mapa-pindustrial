// control that shows state info on hover
var info = L.control();

info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function(props) {
    switch (show) {
        case SHOW_COMPANY:
            if (props) {
                if (props.name) {
                    var area = props.area ? props.area + '   m<sup>2</sup><br />' : ' ';
                    var activity = props.activity ? props.activity + '<br />' : ' ';
                    var since = props.since ? props.since + '<br />' : ' ';
                    var square = props.square ? props.square + '<br />' : ' ';
                    this._div.innerHTML =
                        '<h4>Información</h4><b>' +
                        props.name + '</b><br />' +
                        area +
                        activity +
                        since +
                        square;
                } else {
                    this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
                }
            } else {
                this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
            }
            break;
        case SHOW_EMPTY:
            if (props) {
                if (props.name) {
                    this._div.innerHTML = '<h4> ' + props.name + '</h4>';
                } else {
                    this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
                }
            } else {
                this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
            }
            break;
        case SHOW_ALL:
            if (props) {
                if (props.name) {
                    var area = props.area ? props.area + '   m<sup>2</sup><br />' : ' ';
                    var activity = props.activity ? props.activity + '<br />' : ' ';
                    var since = props.since ? props.since + '<br />' : ' ';
                    var square = props.square ? props.square + '<br />' : ' ';
                    this._div.innerHTML =
                        '<h4>Información de lote</h4><b>' +
                        props.name + '</b><br />' +
                        area +
                        activity +
                        since +
                        square;
                } else {
                    this._div.innerHTML = '<h4>LOGICA DE LOS LOTES</h4>';
                }
            } else {
                this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
            }
            break;
        default:
            if (props) {
                if (props.name) {
                    var area = props.area ? props.area + '   m<sup>2</sup><br />' : ' ';
                    var activity = props.activity ? props.activity + '<br />' : ' ';
                    var since = props.since ? props.since + '<br />' : ' ';
                    var square = props.square ? props.square + '<br />' : ' ';
                    this._div.innerHTML =
                        '<h4>Información de lote</h4><b>' +
                        props.name + '</b><br />' +
                        area +
                        activity +
                        since +
                        square;
                } else {
                    this._div.innerHTML = '<h4>LOGICA DE LOS LOTES</h4>';
                }
            } else {
                this._div.innerHTML = '<h4>PARQUE INDUSTRIAL</h4>';
            }
            break;
    }
};

info.addTo(map);