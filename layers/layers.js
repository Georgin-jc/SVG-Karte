var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MV_PLZgebieten_1 = new ol.format.GeoJSON();
var features_MV_PLZgebieten_1 = format_MV_PLZgebieten_1.readFeatures(json_MV_PLZgebieten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MV_PLZgebieten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MV_PLZgebieten_1.addFeatures(features_MV_PLZgebieten_1);
var lyr_MV_PLZgebieten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MV_PLZgebieten_1, 
                style: style_MV_PLZgebieten_1,
                popuplayertitle: 'MV_PLZgebieten',
                interactive: true,
                title: '<img src="styles/legend/MV_PLZgebieten_1.png" /> MV_PLZgebieten'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MV_PLZgebieten_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MV_PLZgebieten_1];
lyr_MV_PLZgebieten_1.set('fieldAliases', {'descriptio': 'descriptio', });
lyr_MV_PLZgebieten_1.set('fieldImages', {'descriptio': 'TextEdit', });
lyr_MV_PLZgebieten_1.set('fieldLabels', {'descriptio': 'header label - visible with data', });
lyr_MV_PLZgebieten_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});