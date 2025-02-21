var size = 0;
var placement = 'point';

var style_FrankstonLGA_40 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,0,0,1.0)', lineDash: [33.25,6.6499999999999995,13.299999999999999,6.6499999999999995,13.299999999999999,6.6499999999999995], lineCap: 'butt', lineJoin: 'miter', width: 6.6499999999999995}),fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
