var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zones_interes_1 = new ol.format.GeoJSON();
var features_Zones_interes_1 = format_Zones_interes_1.readFeatures(json_Zones_interes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_interes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_interes_1.addFeatures(features_Zones_interes_1);
cluster_Zones_interes_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Zones_interes_1
});
var lyr_Zones_interes_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Zones_interes_1, 
                style: style_Zones_interes_1,
                popuplayertitle: 'Zones_interes',
                interactive: true,
    title: 'Zones_interes<br />\
    <img src="styles/legend/Zones_interes_1_0.png" /> Arquitectònic<br />\
    <img src="styles/legend/Zones_interes_1_1.png" /> <br />\
    <img src="styles/legend/Zones_interes_1_2.png" /> Natura<br />' });
var format_Rutes_2 = new ol.format.GeoJSON();
var features_Rutes_2 = format_Rutes_2.readFeatures(json_Rutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutes_2.addFeatures(features_Rutes_2);
var lyr_Rutes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutes_2, 
                style: style_Rutes_2,
                popuplayertitle: 'Rutes',
                interactive: true,
                title: '<img src="styles/legend/Rutes_2.png" /> Rutes'
            });
var group_ZONES = new ol.layer.Group({
                                layers: [lyr_Zones_interes_1,lyr_Rutes_2,],
                                fold: "open",
                                title: 'ZONES'});
var group_MAPES = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'MAPES'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Zones_interes_1.setVisible(true);lyr_Rutes_2.setVisible(true);
var layersList = [group_MAPES,group_ZONES];
lyr_Zones_interes_1.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Localització': 'Localització', 'Documentació': 'Documentació', 'Tipus': 'Tipus', });
lyr_Rutes_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Distància (Km)': 'Distància (Km)', 'Temps': 'Temps', 'Tipus': 'Tipus', 'Modalitat': 'Modalitat', 'Dificultat': 'Dificultat', });
lyr_Zones_interes_1.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Localització': 'TextEdit', 'Documentació': 'TextEdit', 'Tipus': 'ValueMap', });
lyr_Rutes_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Distància (Km)': 'TextEdit', 'Temps': 'TextEdit', 'Tipus': 'TextEdit', 'Modalitat': 'TextEdit', 'Dificultat': 'TextEdit', });
lyr_Zones_interes_1.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Localització': 'no label', 'Documentació': 'no label', 'Tipus': 'no label', });
lyr_Rutes_2.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Distància (Km)': 'no label', 'Temps': 'no label', 'Tipus': 'no label', 'Modalitat': 'no label', 'Dificultat': 'no label', });
lyr_Rutes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});