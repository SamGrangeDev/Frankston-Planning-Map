var size = 0;
var placement = 'point';

var style_Suburb_39 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0000";
    var bufferWidth = 1.9999999999999991;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("SAL_NAME21") !== null) {
        labelText = String(feature.get("SAL_NAME21"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [8.55,1.71,3.42,1.71,3.42,1.71], lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(183,72,75,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
