var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TCE2018_postcodes__1 = new ol.format.GeoJSON();
var features_TCE2018_postcodes__1 = format_TCE2018_postcodes__1.readFeatures(json_TCE2018_postcodes__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCE2018_postcodes__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCE2018_postcodes__1.addFeatures(features_TCE2018_postcodes__1);
var lyr_TCE2018_postcodes__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TCE2018_postcodes__1, 
                style: style_TCE2018_postcodes__1,
                interactive: true,
                title: '<img src="styles/legend/TCE2018_postcodes__1.png" /> TCE 2018_ postcodes_'
            });
var format_TCE_2017_2 = new ol.format.GeoJSON();
var features_TCE_2017_2 = format_TCE_2017_2.readFeatures(json_TCE_2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCE_2017_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCE_2017_2.addFeatures(features_TCE_2017_2);
var lyr_TCE_2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TCE_2017_2, 
                style: style_TCE_2017_2,
                interactive: true,
                title: '<img src="styles/legend/TCE_2017_2.png" /> TCE_2017'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_TCE2018_postcodes__1.setVisible(true);lyr_TCE_2017_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TCE2018_postcodes__1,lyr_TCE_2017_2];
lyr_TCE2018_postcodes__1.set('fieldAliases', {'fid': 'fid', 'Postcode': 'Postcode', 'Description': 'Description', 'Grid Reference': 'Grid Reference', 'X (easting)': 'X (easting)', 'Y (northing)': 'Y (northing)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TCE_2017_2.set('fieldAliases', {'fid': 'fid', 'Postcode': 'Postcode', 'Description': 'Description', 'Grid Reference': 'Grid Reference', 'X (easting)': 'X (easting)', 'Y (northing)': 'Y (northing)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TCE2018_postcodes__1.set('fieldImages', {'fid': 'TextEdit', 'Postcode': 'TextEdit', 'Description': 'TextEdit', 'Grid Reference': 'TextEdit', 'X (easting)': 'TextEdit', 'Y (northing)': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TCE_2017_2.set('fieldImages', {'fid': '', 'Postcode': '', 'Description': '', 'Grid Reference': '', 'X (easting)': '', 'Y (northing)': '', 'Latitude': '', 'Longitude': '', });
lyr_TCE2018_postcodes__1.set('fieldLabels', {'fid': 'no label', 'Postcode': 'no label', 'Description': 'no label', 'Grid Reference': 'no label', 'X (easting)': 'no label', 'Y (northing)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_TCE_2017_2.set('fieldLabels', {'fid': 'no label', 'Postcode': 'no label', 'Description': 'no label', 'Grid Reference': 'no label', 'X (easting)': 'no label', 'Y (northing)': 'no label', 'Latitude': 'header label', 'Longitude': 'no label', });
lyr_TCE_2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});