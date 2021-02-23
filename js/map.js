// initialise map variable
// putting it outside of the main function gives us access from browser
//development tools

var map;

function initMap() {
    var osm;
    var myview;
    var bing_aerial;
    var anthromes1700;
    var anthromes1800;
    var anthromes1900;
    var anthromes2000;

    // Create a Tile layer getting tiles from OpenStreetMap source
    osm = new ol.layer.Tile(
        {
            source: new ol.source.OSM(),    
            title: 'Open Street Map',
            type: 'base'    
        }
    );


    // Create a Tile layer getting tiles from Bing source
    bing_aerial = new ol.layer.Tile(
        {
        source: new ol.source.BingMaps(
            {
            key: 'AjidZEk3eBXm6tdnMmXqrRnfXq0W-0shX5MJdp5wxLmcZAwaOUjkz7fDAid7s5iD',
            imagerySet: 'Aerial'
            }
        ),
        
        //opacity: 0.5
        title: 'Bing Aerial',
        type: 'Base'
        
        }
    );

    // Create a WMS Layer - 1700
    anthromes1700 = new ol.layer.Tile(
        {
            source: new ol.source.TileWMS(
                {
                    url: 'https://sedac.ciesin.columbia.edu/geoserver/ows?SERVICE=WMS&',
                    params: {'LAYERS': 'anthromes:anthromes-anthropogenic-biomes-world-v2-1700'},
                    attributions: 'Socioeconomic Data and Applications Center (SEDAC)'
                }
            ),
            opacity: 0.70,
            title: 'Anthromes 1700',
            visible: false,
            legendurl:'https://sedac.ciesin.columbia.edu/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=anthromes%3Aanthromes-anthropogenic-biomes-world-v2-1800'

        }
    );
        
    // Create a WMS Layer - 1800
    anthromes1800 = new ol.layer.Tile(
        {
            source: new ol.source.TileWMS(
                {
                    url: 'https://sedac.ciesin.columbia.edu/geoserver/ows?SERVICE=WMS&',
                    params: {'LAYERS': 'anthromes:anthromes-anthropogenic-biomes-world-v2-1800'},
                    attributions: 'Socioeconomic Data and Applications Center (SEDAC)'
                }
            ),
            opacity: 0.70,
            title: 'Anthromes 1800',
            visible: false
        }
    );

     // Create a WMS Layer - 1900
     anthromes1900 = new ol.layer.Tile(
        {
            source: new ol.source.TileWMS(
                {
                    url: 'https://sedac.ciesin.columbia.edu/geoserver/ows?SERVICE=WMS&',
                    params: {'LAYERS': 'anthromes:anthromes-anthropogenic-biomes-world-v2-1900'},
                    attributions: 'Socioeconomic Data and Applications Center (SEDAC)'
                }
            ),
            opacity: 0.70,
            title: 'Anthromes 1900',
            visible: false
        }
    );   

     // Create a WMS Layer - 2000
     anthromes2000 = new ol.layer.Tile(
        {
            source: new ol.source.TileWMS(
                {
                    url: 'https://sedac.ciesin.columbia.edu/geoserver/ows?SERVICE=WMS&',
                    params: {'LAYERS': 'anthromes:anthromes-anthropogenic-biomes-world-v2-2000'},
                    attributions: 'Socioeconomic Data and Applications Center (SEDAC)'
                }
            ),
            opacity: 0.70,
            title: 'Anthromes 2000',
            visible: false
        }
    );     

    // Create a view
    myview = new ol.View(
        {
        center: ol.proj.fromLonLat([0, 0], "EPSG:3857"),
        zoom: 2.5
        }
    );

    // Create a map
    map = new ol.Map(
        {
        target: 'mymap',
        layers:[osm, bing_aerial, anthromes1700, anthromes1800, anthromes1900, anthromes2000],
        view: myview,
        controls:[
            new ol.control.Zoom(),
            new ol.control.ZoomSlider(),
            new ol.control.ScaleLine(),
            new ol.control.LayerSwitcher()
        ]
        }
    );

    document.getElementById("legend").innerHTML = '<h4>Legend</h4><img class="img-responsive" src=' + anthromes1700.get('legendurl') +'>';

}
