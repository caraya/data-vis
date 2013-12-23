var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {

	// set up AJAX request
	ajaxRequest=getXmlHttpObject();
	if (ajaxRequest==null) {
		alert ("This browser does not support HTTP Request");
		return;
	}

  function GetXmlHttpObject() {
    if (window.XMLHttpRequest) { return new XMLHttpRequest(); }
    if (window.ActiveXObject)  { return new ActiveXObject("Microsoft.XMLHTTP"); }
    return null;
  }
	
  // set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/16/54992/25419.png';
	var osmAttrib='Map data © OpenStreetMap contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(122.0819, 37.3894),16);
	map.addLayer(osm);