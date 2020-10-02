const SHOW_COMPANY = "company";
const SHOW_EMPTY = "empty";
const SHOW_ALL = "all";
const COORDINATES_DEFAULT = [-32.489511, -58.267581];
const ZOOM_DEFAULT = 13;
const ZOOM_LOTES = 20;

var coordinates = COORDINATES_DEFAULT;
var lat = -32.496;
var lng = -58.305;
var zoom = 2;
var show;

getShow = function() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var show = url.searchParams.get("show");
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
    this.show = show;
    return show;
}

window.onload = function() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var lote = url.searchParams.get("lote");
        var zoom = lote ? ZOOM_LOTES : ZOOM_DEFAULT;
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }

    switch (lote) {
        case "7mz2":
            coordinates = [-32.4914746238669, -58.30236196517944]
            break;
        case "2mz3":
            coordinates = [-32.49044411000094, -58.30807775259018]
            break;
        case "4amz3":
            coordinates = [-32.49055609835826, -58.30695390701294]
            break;
        case "6mz4":
            coordinates = [-32.49097690184887, -58.304572105407715]
            break;
        case "7mz4":
            coordinates = [-32.4909916073116, -58.304336071014404]
            break;
        case "11amz4":
            coordinates = [-32.49162846466085, -58.30598831176758]
            break;
        case "11bmz4":
            coordinates = [-32.491918046618146, -58.30607414245605]
            break;
        case "1bmz6":
            coordinates = [-32.492171430066165, -58.308284282684326]
            break;
        case "1amz7":
            coordinates = [-32.492470059642265, -58.30636382102966]
            break;
        case "1bmz7":
            coordinates = [-32.49317590742702, -58.306567668914795]
            break;
        case "2mz7":
            coordinates = [-32.492822984226926, -58.30585956573486]
            break;
        case "3mz7":
            coordinates = [-32.492850132214535, -58.30544114112854]
            break;
        case "1amz8":
            coordinates = [-32.49272344153553, -58.30304861068725]
            break;
        case "1bmz8":
            coordinates = [-32.493181, -58.303020]
            break;
        case "2mz8":
            coordinates = [-32.49313971023945, -58.302630186080926]
            break;
        case "3amz8":
            coordinates = [-32.49315780883504, -58.30225467681885]
            break;
        case "4amz8":
            coordinates = [-32.493184956721635, -58.30193281173706]
            break;
        case "2mz15":
            coordinates = [-32.50086747938236, -58.31088066101074]
            break;
        case "3mz15":
            coordinates = [-32.501333477020815, -58.311041593551636]
            break;
        default:
            coordinates = COORDINATES_DEFAULT
            break;
    }
    if (lote) {
        this.addSpecificMarker(coordinates, lote);
    } else {
        this.addMarkers(show);
    }
    console.log(zoom);
    map.setView(coordinates, zoom);
}