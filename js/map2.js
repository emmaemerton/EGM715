// initialise map variable
// putting it outside of the main function gives us access from browser

var map;

function initMap() {
    var osm;
    var myview;
    var other_1972_2005;
    var other_2006_2019;
    var harlq_1972_2005;
    var harlq_2006_2019;

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



    other_2006_2019 = new ol.layer.Vector(
        {
            source: new ol.source.Vector(
                {
                    format: new ol.format.GeoJSON(),
                    url: '/data/other_2006_2019.geojson'
                }
            ),
        title: 'Ladybirds (other) 2006-2019',
        visible: false
        }
    );

    harlq_1972_2005 = new ol.layer.Vector(
        {
            source: new ol.source.Vector(
                {
                    format: new ol.format.GeoJSON(),
                    url: '/data/harlq_1972_2005.geojson'
                }
            ),
        title: 'Ladybirds (harlequin) 1972-2005',
        visible: false
        }
    );

    harlq_2006_2019 = new ol.layer.Vector(
        {
            source: new ol.source.Vector(
                {
                    format: new ol.format.GeoJSON(),
                    url: '/data/harlq_2006_2019.geojson'
                }
            ),
        title: 'Ladybirds (harlequin) 2006_2019',
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
            layers:[osm, other_1972_2005, other_2006_2019, harlq_1972_2005, harlq_2006_2019],
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
