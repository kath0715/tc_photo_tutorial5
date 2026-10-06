var wms_layers = [];

var lyr_OPM100_2025_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPM100_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPM100_2025_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12662778.092838, 2520677.038459, 12747368.359726, 2586698.430168]
        })
    });
var lyr_omp100_2025_clipped_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'omp100_2025_clipped<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/omp100_2025_clipped_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12676448.569692, 2542615.320485, 12687611.940329, 2551630.320388]
        })
    });
var format_week5_table_lecturepractice_2 = new ol.format.GeoJSON();
var features_week5_table_lecturepractice_2 = format_week5_table_lecturepractice_2.readFeatures(json_week5_table_lecturepractice_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_week5_table_lecturepractice_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_week5_table_lecturepractice_2.addFeatures(features_week5_table_lecturepractice_2);
cluster_week5_table_lecturepractice_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_week5_table_lecturepractice_2
});
var lyr_week5_table_lecturepractice_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_week5_table_lecturepractice_2, 
                style: style_week5_table_lecturepractice_2,
                popuplayertitle: 'week5_table_lecturepractice',
                interactive: true,
                title: '<img src="styles/legend/week5_table_lecturepractice_2.png" /> week5_table_lecturepractice'
            });
var format_villagesizev1_3 = new ol.format.GeoJSON();
var features_villagesizev1_3 = format_villagesizev1_3.readFeatures(json_villagesizev1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_villagesizev1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_villagesizev1_3.addFeatures(features_villagesizev1_3);
cluster_villagesizev1_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_villagesizev1_3
});
var lyr_villagesizev1_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_villagesizev1_3, 
                style: style_villagesizev1_3,
                popuplayertitle: 'villagesizev1',
                interactive: true,
    title: 'villagesizev1<br />\
    <img src="styles/legend/villagesizev1_3_0.png" /> 46 - 143<br />\
    <img src="styles/legend/villagesizev1_3_1.png" /> 143 - 164<br />\
    <img src="styles/legend/villagesizev1_3_2.png" /> 164 - 189<br />\
    <img src="styles/legend/villagesizev1_3_3.png" /> 189 - 327<br />\
    <img src="styles/legend/villagesizev1_3_4.png" /> 327 - 412<br />' });

lyr_OPM100_2025_0.setVisible(true);lyr_omp100_2025_clipped_1.setVisible(true);lyr_week5_table_lecturepractice_2.setVisible(true);lyr_villagesizev1_3.setVisible(true);
var layersList = [lyr_OPM100_2025_0,lyr_omp100_2025_clipped_1,lyr_week5_table_lecturepractice_2,lyr_villagesizev1_3];
lyr_week5_table_lecturepractice_2.set('fieldAliases', {'photo_no': 'photo_no', 'box_no': 'box_no', 'file_name': 'file_name', 'photo_path': 'photo_path', 'keycode': 'keycode', 'notes': 'notes', 'photographer': 'photographer', 'handler': 'handler', 'Sorting_date': 'Sorting_date', 'place_name': 'place_name', 'direction': 'direction', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_villagesizev1_3.set('fieldAliases', {'村落': '村落', '總戶數（戶）': '總戶數（戶）', '總人口（人）': '總人口（人）', '平均每戶人數（人）': '平均每戶人數（人）', '對應地名／處理方式': '對應地名／處理方式', '緯度 Latitude': '緯度 Latitude', '經度 Longitude': '經度 Longitude', '座標來源': '座標來源', });
lyr_week5_table_lecturepractice_2.set('fieldImages', {'photo_no': 'TextEdit', 'box_no': 'TextEdit', 'file_name': 'TextEdit', 'photo_path': 'ExternalResource', 'keycode': 'Range', 'notes': 'TextEdit', 'photographer': 'TextEdit', 'handler': 'TextEdit', 'Sorting_date': 'TextEdit', 'place_name': 'TextEdit', 'direction': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_villagesizev1_3.set('fieldImages', {'村落': 'TextEdit', '總戶數（戶）': 'Range', '總人口（人）': 'Range', '平均每戶人數（人）': 'TextEdit', '對應地名／處理方式': 'TextEdit', '緯度 Latitude': 'TextEdit', '經度 Longitude': 'TextEdit', '座標來源': 'TextEdit', });
lyr_week5_table_lecturepractice_2.set('fieldLabels', {'photo_no': 'no label', 'box_no': 'no label', 'file_name': 'no label', 'photo_path': 'inline label - visible with data', 'keycode': 'no label', 'notes': 'no label', 'photographer': 'no label', 'handler': 'no label', 'Sorting_date': 'no label', 'place_name': 'no label', 'direction': 'no label', 'latitude': 'no label', 'longitude': 'header label - visible with data', });
lyr_villagesizev1_3.set('fieldLabels', {'村落': 'no label', '總戶數（戶）': 'no label', '總人口（人）': 'no label', '平均每戶人數（人）': 'no label', '對應地名／處理方式': 'no label', '緯度 Latitude': 'no label', '經度 Longitude': 'no label', '座標來源': 'no label', });
lyr_villagesizev1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});