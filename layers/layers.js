ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([79.856544, 25.714250, 88.407902, 31.100623]);
var wms_layers = [];

var format_NPL_new_wgs_2_0 = new ol.format.GeoJSON();
var features_NPL_new_wgs_2_0 = format_NPL_new_wgs_2_0.readFeatures(json_NPL_new_wgs_2_0, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:4326'
});
var jsonSource_NPL_new_wgs_2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPL_new_wgs_2_0.addFeatures(features_NPL_new_wgs_2_0);
var lyr_NPL_new_wgs_2_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_NPL_new_wgs_2_0,
    style: style_NPL_new_wgs_2_0,
    interactive: true,
    title: '<img src="styles/legend/NPL_new_wgs_2_0.png" /> NPL_new_wgs_2'
});

lyr_NPL_new_wgs_2_0.setVisible(true);
var layersList = [lyr_NPL_new_wgs_2_0];
lyr_NPL_new_wgs_2_0.set('fieldAliases', {
    'प्रदेश': 'प्रदेश',
    'जिल्ला': 'जिल्ला',
    'लिंक': 'लिंक',
});
lyr_NPL_new_wgs_2_0.set('fieldImages', {
    'प्रदेश': 'TextEdit',
    'जिल्ला': 'TextEdit',
    'लिंक': '',
});
lyr_NPL_new_wgs_2_0.set('fieldLabels', {
    'प्रदेश': 'inline label',
    'जिल्ला': 'inline label',
    'लिंक': 'inline label',
});
lyr_NPL_new_wgs_2_0.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});