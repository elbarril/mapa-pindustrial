const SHOW_COMPANY = "company";
const SHOW_EMPTY = "empty";
const SHOW_ALL = "all";
const COORDINATES_DEFAULT = [-32.497358, -58.308406];
const ZOOM_DEFAULT = 15;
const ZOOM_LOTES = 20;

var coordinates = COORDINATES_DEFAULT;
var lat = -32.496;
var lng = -58.305;
var zoom = 14;
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
            coordinates = [-32.491429, -58.302304]
            break;
        case "2mz3":
            coordinates = [-32.490316, -58.308334]
            break;
        case "4amz3":
            coordinates = [-32.490379, -58.307014]
            break;
        case "6mz4":
            coordinates = [-32.490748, -58.304682]
            break;
        case "7mz4":
            coordinates = [-32.490757, -58.304425]
            break;
        case "11amz4":
            coordinates = [-32.491580, -58.306206]
            break;
        case "11bmz4":
            coordinates = [-32.491806, -58.306335]
            break;
        case "1bmz6":
            coordinates = [-32.492127, -58.308590]
            break;
        case "1amz7":
            coordinates = [-32.492395, -58.306432]
            break;
        case "1bmz7":
            coordinates = [-32.493028, -58.306689]
            break;
        case "2mz7":
            coordinates = [-32.492612, -58.305874]
            break;
        case "3mz7":
            coordinates = [-32.492621, -58.305316]
            break;
        case "1amz8":
            coordinates = [-32.492584, -58.302913]
            break;
        case "1bmz8":
            coordinates = [-32.493181, -58.303020]
            break;
        case "2mz8":
            coordinates = [-32.492955, -58.302484]
            break;
        case "3amz8":
            coordinates = [-32.492937, -58.302162]
            break;
        case "4amz8":
            coordinates = [-32.492928, -58.301840]
            break;
        case "2mz15":
            coordinates = [-32.500949, -58.311046]
            break;
        case "3mz15":
            coordinates = [-32.501139, -58.311121]
            break;
        default:
            coordinates = COORDINATES_DEFAULT

            break;
    }
    map.setView(coordinates, zoom);
}