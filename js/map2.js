// initialise map variable
// putting it outside of the main function gives us access from browser

var map;

function initMap() {
    var osm;
    var myview;
    var other_1972_2005;
    // Create a Tile layer getting tiles from OpenStreetMap source
    osm = new ol.layer.Tile(
    {
    source: new ol.source.OSM(),
    title: 'Open Street Map',
    type: 'base'
    }
    );
    other_1972_2005 = new ol.layer.Vector(
    {
    source: new ol.source.Vector(
    {
    format: new ol.format.GeoJSON(),
    url: '/data/other_1972_2005.geojson'
    }
    ),
    title: 'Ladybirds (other) 1972-2005',
    visible: false
    }
    );
    // Create a view
    myview = new ol.View(
    {
    center: ol.proj.fromLonLat([-2.89479, 54.093409], "EPSG:3857"),
    zoom: 5.5
    }
    );
    // Create a map
    map = new ol.Map(
    {
    target: 'mymap',
    layers:[osm, other_1972_2005],
    view: myview,
    controls:[
    new ol.control.Zoom(),
    new ol.control.ZoomSlider(),
    new ol.control.ScaleLine(),
    new ol.control.LayerSwitcher()
    ]
    }
    );
}
