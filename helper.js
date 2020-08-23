var lat = -32.496;
var lng = -58.305;
var zoom = 14;

window.onload = function() {
  try {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var lote = url.searchParams.get("lote");
    var zoom = url.searchParams.get("zoom") || 14;
  } catch (err) {
    console.log("Issues with Parsing URL Parameter's - " + err);
  }

  switch (lote) {
    case "1":
        lat = -32.4896559;
        lng = -58.3071581;
    break;
    case "2":
      lat = -32.4937168;
      lng = -58.3073535;
    break;
    case "3":
      lat = -32.4983204;
      lng = -58.3110433;
    break;
    default:
      lat = -32.496;
      lng = -58.305;
      break;
  }
  console.log("latitud: " + lat + ", longitud: " + lng + ", zoom: "+zoom);

    map.setView([lat,lng],zoom);
}
