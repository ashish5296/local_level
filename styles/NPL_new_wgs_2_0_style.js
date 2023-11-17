var size = 0;
var placement = 'point';
var i = 1;
Object.keys(json_NPL_new_wgs_2_0.features).map(
    (e) => {
        json_NPL_new_wgs_2_0.features[e]["id"] = i;
        i++
    });
var style_NPL_new_wgs_2_0 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var labelText = "";
    var labelFont = "9pt, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fff";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }

    if (feature) {

        var fillcolor;
        var id = feature.getId()
        if (id < 15) {
            fillcolor = "red"
        } else if (id < 23) {
            fillcolor = "blue"
        } else if (id < 36) {
            fillcolor = "green"
        } else if (id < 47) {
            fillcolor = "teal"
        } else if (id < 59) {
            fillcolor = "purple"
        } else if (id < 69) {
            fillcolor = "brown"
        } else {
            fillcolor = "cyan"
        }

        labelText = feature.get("जिल्ला");
        var newText = [];
        for (var i = 0; i < labelText.length; i++) {

            if (labelText[i] != "&" && labelText[i] != " " && labelText[i] != "n" && labelText[i] != "b" && labelText[i] != "s" && labelText[i] != "p" && labelText[i] != ";") {
                newText.push(labelText[i]);
                var labelDistrict = newText.join('')
            }
        }
        // console.log(labelDistrict);
        var style = [new ol.style.Style({

            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0
            }),
            fill: new ol.style.Fill({
                color: fillcolor
            }),
            // text: createTextStyle(feature, resolution, labelText, labelFont,
            //     labelFill, placement, bufferColor,
            //     bufferWidth)
            text: new ol.style.Text({
                text: labelDistrict,
                font: '9px sans-serif',
                stroke: new ol.style.Stroke({
                    color: 'black',
                    width: 0.75
                }),
                fill: new ol.style.Fill({
                    color: "#000"
                })
            })
        })];
    }

    return style;
};