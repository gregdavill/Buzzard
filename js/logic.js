var canvas = document.getElementById("labelCanvas");
var ctx = canvas.getContext("2d");
var fixedHeight = 41;
ctx.canvas.width = 405;
ctx.canvas.height = 405;
ctx.font = "36px Fredoka One"

function drawLabel() {

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = 0;

  ctx.imageSmoothingEnabled = false;

  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";

  ctx.fillRect(((ctx.canvas.width / 2) -
    ctx.measureText(document.getElementById("labelText").value).width / 2) - 1, (ctx.canvas.height / 2) - fixedHeight / 2, ctx.measureText(document.getElementById("labelText").value).width + 2, fixedHeight);

  ctx.fillStyle = "white";

  ctx.fillText(document.getElementById("labelText").value, ((ctx.canvas.width / 2) - (ctx.measureText(document.getElementById("labelText").value).width / 2)), (ctx.canvas.height / 2) + fixedHeight / 2 - document.getElementById("fontOffsetV").value)

  var leftCap = new Image();
  switch (document.getElementById("leftCapStyle").value) {

    case "square":
      leftCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABbSURBVEiJ7c0hDoAwEETRT9OETRBcgMPt1fZeSHxtUcWgWUiQM/rnzTTG2IGZ5xV3bxGRZFBvbMvC3vsCrFlX0suPEyhQoECBAgUKFChQ4L+rwAkc2bGZtRcdF6ASDxfWlNCuAAAAAElFTkSuQmCC";
      break;

    case "rounded":
      leftCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEXSURBVEiJrdc9SsRAGAbgZxPWQrZyUVhWW7VXBMFGL6HoFbyHXkB08RBWWnoCT2CpgoXYiIVWsUgiKLv52++FgVTP/CTzzaSnW1LsYB9b2MQIg7bQGs7xgmxGa5RlTPBdATUGj/HeAKoF+7huAVWCi7jrgE0F+3NgU8Eu05wJnsyJ/QGHeIsEJwHYL7iq2Udb25ICPMXC/wXtmgTPQdPNYDcQyxJ5CQpLgu1ocD0aHEWDrct2HRiaBJ/R4Gs0+BgNPkSD95FgiT4J2stp8bCCvchRhhXYtAA/MBZcKJYEH1JwFA3CVTSY4iYSJL8s3UaC5Jemy0iwzKF2b79RhrjAVxRYZowzFXu/11YsUh6/B/Lfio2is8EP0d5ki1S/K78AAAAASUVORK5CYII=";
      break;

    case "pointer":
      leftCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADZSURBVEiJzda7DcIwFEDRSyj5iAGYgnSZiQHYhRXYBBaghYIaRG+KKAg58ed9Cq6U9siynGeDvSVwAM7A24rtgBsQfj51HfCMMDWYwlRgDhODJUwE1mDVYC1WBUqwItgBLwGWBTVYEtRik6AFG4FWLHhjX7B1wgLACrg7YaEB9sA23kxLF6/VAWFGP7YXXqtrKPwuGvDqDZ48QeiPTXxz/dfBHpIO0iLohY6yopNZ0GRaNJsGLeZ6jWrQ6lyfIhJUnOtzrgZV5/okHmqJRt/cCD6AI/3oWwObD86xkBtMQ164AAAAAElFTkSuQmCC";
      break;

    case "forwardslash":
      leftCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACbSURBVEiJzdFBDkAwEEbhF2txGcexd1qXcYLaiFAt0xnamaRL8v58YLsRCOfXGX84G7+/XA+sfFg4AcMHYcctRHX7U90NA+Pk/zEwFFbDUKFkMVBOroehKayOUYTyikHh5PoYJYXNMEQoYgyEk9thSAqbYzyiFGPwMrk9xlOhG4wkihqDzGQ/GKlCdxgXFDNGPNkfxrnQLUYAwgZ4hCV4htXw3AAAAABJRU5ErkJggg==";
      break;

    case "backslash":
      leftCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACXSURBVEiJzdG7DYAwDEXRi9KyBDNkDUZnGVoaqCxFwoR8rMRXShs96wAcwG31ArAAO4atwGm58AI2IFqujFYL009NcELyoU+cdKFbnFddOEH50BeOttAdzmdNONrJkg+c3EI3OL9V4eROlubilCycjlNcEU7JydIcnJqF03Cqy+LUnCyNxWlZOBynORWn5WRpDE7PwjE4D26TK+gPXQwPAAAAAElFTkSuQmCC";
      break;

  }

  var rightCap = new Image();
  switch (document.getElementById("rightCapStyle").value) {

    case "square":
      rightCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABcSURBVEiJ7dexDYBADATBBX3gDFEHRbk1FwUd0AABkj9BlOBHIryLV5PfBOwUc3ciYgWeIu0N2CowMy9gqTrgnAeiTxMoUKBAgQIFChQoUOC/a8BRRWYGcDNwK14ccA79rzMhugAAAABJRU5ErkJggg==";
      break;

    case "rounded":
      rightCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEYSURBVEiJrddBLkNRFAbgr1UdGIoZMbUACXN7ELZgIyxAhQ1YAUYSC5B2ATVDQyI1YtAaeAbti6Zppdr/JGfwJl/OPfe+9+6p4AufeEEbLdzhHt/miGJKPuMEGymwzD7OsZYCy+ziMAmWeYHlJFjgBitJsMAt6kmwMNisKFjgIA2+GztSi4IFztJgH5tQndTUOaKOo2SFBTpYqgwfUrGbWnIZe2lwOw1upXvYTYP99JJjB7uMjzT4mgbbabCZ3uUdch+HR1STS740vLokquthvZQT4OloqYtiXeGf1P54MxfBGuPYIuA1ainwSvCy1JhW2X/BNxM2YB6wZ3DOVmfB/gKfcGzkDZglan7Hig4e0DQYK1rmGCt+AMWTc1D8alFsAAAAAElFTkSuQmCC";
      break;

    case "pointer":
      rightCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADOSURBVEiJrdaxDcIwFIThHyhJxyYwQFiBaTIVg5CKljKMYKhoTBGQXMSx/d49yUWaT7YU+24HvIELcADuwAfnxGQ9gaMSjMw77pWgG10CXWgONKNroAktgc1oDfhHz0qwGm0Bq9BWsIhawFXUCmZRD7iIesEIBOCkBCPz09dtfh+qGdTgqAbDVogBRDX4UINX0P02E7BXgYEkfhVXr0/PLcU8YDZnpJgFLCagFGsBq7NZitWA0ioiLUvSOictnNJKPJHEoXVewA0YgM6LfQHcEoFiBXwtEAAAAABJRU5ErkJggg==";
      break;

    case "forwardslash":
      rightCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADPSURBVEiJrZG7DcJAEAXHFEADlOFundMNNAPkEFgPIXyf3bs3kgNf8DSrWYA3Pu4n4xjAtuAzfAEXp+EVeMBu6PhWLTvGbhpznbz9/szaPYGz0/Abw2W48oclhpg9eSs9WmI4DA8xZg0PMWYGDzHE6MnFGKOGxRgzhtUYo4bVGCOD1Rgie3IzRtawGWPEsBsja9iNkRnsxhDRk0MxooahGBnDcIyoYThGZDAcQ/ROTsUQlhiiZZiOIWwxWoPpGKJ28lAMYYkhSobDMYQtBsAHDuoN3MejRU8AAAAASUVORK5CYII=";
      break;

    case "backslash":
      rightCap.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADYSURBVEiJrdHLDcIwEEXRC+uIBiiDZtJAuoVqYB82DFJijz2/kbLJ4ulaB2A/fQ8Sd+382zKD0Ba+gVt0rFe4AGt0ENrCHXhWD4Zxek+WC+NohSGcUWEYRysM44wG3TijJ8u5cWaFLhxLoRtnVujGsQyacSxPljPjWAtNOJ5CM4610IzjGZzieJ4sN8XxFg5xIoVTHG/hFCcyqOJEniyn4kQLuziZQhUnWqjiZAYbnMyT5RqcbOEBp6KwwckWNjgVg3+ciifLbQCX33rFfYB7ZeECrJWFAK8vak0CnNNYE7UAAAAASUVORK5CYII=";
      break;

  }

  leftCap.onload = function() {
    ctx.drawImage(leftCap, ((ctx.canvas.width / 2) -
      ctx.measureText(document.getElementById("labelText").value).width / 2) - 20, (ctx.canvas.height / 2) - fixedHeight / 2, 20, fixedHeight);
  }

  rightCap.onload = function() {
    ctx.drawImage(rightCap, ((ctx.canvas.width / 2) +
      ctx.measureText(document.getElementById("labelText").value).width / 2), (ctx.canvas.height / 2) - fixedHeight / 2, 20, fixedHeight);
  }

  setTimeout(function() {
    convert1bit();
    eaglify();
    findDimensions();
    if (document.getElementById("invertCanvasCheck").checked == true) {
      invertCanvas();
    }
  }, 100);

}

function loadFont() {

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");
  var testwidth = ctx.measureText("teststring").width;

  var fontString = document.getElementById("fontSize").value + "px " + document.getElementById("labelFont").value;
  console.log(fontString);
  ctx.font = fontString;

  console.log("waiting for font to load...")
  while (ctx.measureText("teststring").width == testwidth) {
    // wait for font width to change
  }
  console.log("Success!");

  setTimeout(function() {
    drawLabel();
  }, 1000);


}

document.getElementById("invertCanvasCheck").onchange = drawLabel;
document.getElementById("labelFont").onchange = loadFont;
document.getElementById("fontSize").onchange = loadFont;
document.getElementById("sharpness").onchange = drawLabel;
document.getElementById("leftCapStyle").onchange = drawLabel;
document.getElementById("rightCapStyle").onchange = drawLabel;
document.getElementById("fontOffsetV").onchange = drawLabel;
document.getElementById("labelText").onchange = drawLabel;
document.getElementById("scaleFactor").onchange = drawLabel;

document.getElementById("showXML").onchange = function() {

  if (document.getElementById("showXML").checked == false) {
    document.getElementById("output").style.visibility = "hidden";
  } else {
    document.getElementById("output").style.visibility = "visible";
  }

};

drawLabel();
setTimeout(function() {
  drawLabel();
}, 1000);

function invertCanvas() {

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // invert colors
  for (var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i];
    imgData.data[i + 1] = 255 - imgData.data[i + 1];
    imgData.data[i + 2] = 255 - imgData.data[i + 2];
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);

}

function eaglify() {

  var outString = "";
  var scaleFactor = document.getElementById("scaleFactor").value;

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  var imgData = ctx.getImageData(((ctx.canvas.width / 2) -
    ctx.measureText(document.getElementById("labelText").value).width / 2) - 22, (ctx.canvas.height / 2) - fixedHeight / 2, ctx.measureText(document.getElementById("labelText").value).width + 46, fixedHeight);

  console.log("Eaglifying image " + imgData.width + "px wide by " + imgData.height + "px tall with imdData length of " + imgData.data.length);

  // for every row in the image
  for (var i = 0; i < imgData.height; i++) {

    var prevPx = 255;

    // for each pixel in the row
    for (var j = 0; j < imgData.width; j++) {

      // if this pixel is black
      if (imgData.data[(i * imgData.width * 4) + (j * 4)] < 128) {

        // ...and previous pixel was white
        if (prevPx > 128) {
          outString += "<rectangle x1=\"" + dectwo(j * scaleFactor) + "\" y1=\"" + dectwo(i * (0 - scaleFactor)) + "\" ";
        } else { // ...and previous pixel was black
          // do nothing, keep cruising
        }

      } else { // if this pixel is white

        // ...and previous pixel was white
        if (prevPx > 128) {
          // do nothing, keep cruising
        } else { // ...and previous pixel was black
          outString += "x2=\"" + dectwo(j * scaleFactor) + "\" y2=\"" + dectwo(i * (0 - scaleFactor) - scaleFactor) + "\" layer=\"21\"/>\n";
        }

      }

      prevPx = imgData.data[(i * imgData.width * 4) + (j * 4)];

    }


  }

  document.getElementById("output").value = outString;

}

function downloadCanvas(link, filename) {

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  var crop = document.createElement('canvas');
  var crop_ctx = crop.getContext("2d");

  crop.width = ctx.measureText(document.getElementById("labelText").value).width + 46;
  crop.height = fixedHeight;

  var imgData = ctx.getImageData(((ctx.canvas.width / 2) -
    ctx.measureText(document.getElementById("labelText").value).width / 2) - 22, (ctx.canvas.height / 2) - fixedHeight / 2, ctx.measureText(document.getElementById("labelText").value).width + 46, fixedHeight);

  crop_ctx.putImageData(imgData, 0, 0);
  link.href = crop.toDataURL('image/png');
  link.download = filename;
}

/*
document.getElementById('download').addEventListener('click', function() {
  downloadCanvas(this, 'test.png');
}, false);
*/

function convert1bit() {

  var threshold = document.getElementById("sharpness").value;

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // invert colors
  for (var i = 0; i < imgData.data.length; i += 4) {
    if (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 3] < threshold) {
      imgData.data[i] = 0;
      imgData.data[i + 1] = 0;
      imgData.data[i + 2] = 0;
    } else {
      imgData.data[i] = 255;
      imgData.data[i + 1] = 255;
      imgData.data[i + 2] = 255;
    }
    imgData.data[i + 3] = 255;
  }

  ctx.putImageData(imgData, 0, 0);

}

function dectwo(x) {
  return Number.parseFloat(x).toFixed(2);
}

function findDimensions() {

  var canvas = document.getElementById("labelCanvas");
  var ctx = canvas.getContext("2d");

  var pixelWidth = ctx.measureText(document.getElementById("labelText").value).width + 46;
  var pixelHeight = fixedHeight;
  var scaleFactor = document.getElementById("scaleFactor").value;

  var resultString = "Actual Size: " + dectwo(pixelWidth * scaleFactor) + "mm x " + dectwo(pixelHeight * scaleFactor) + "mm";

  document.getElementById("realSize").innerHTML = resultString;

}

$("#downloadBrd").click(function() {
  var head = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!DOCTYPE eagle SYSTEM \"eagle.dtd\">\r\n<eagle version=\"7.7.0\">\r\n<drawing>\r\n<settings>\r\n<setting alwaysvectorfont=\"yes\"\/>\r\n<setting verticaltext=\"up\"\/>\r\n<\/settings>\r\n<grid distance=\"0.05\" unitdist=\"inch\" unit=\"inch\" style=\"lines\" multiple=\"1\" display=\"yes\" altdistance=\"0.005\" altunitdist=\"inch\" altunit=\"inch\"\/>\r\n<layers>\r\n<layer number=\"1\" name=\"Top\" color=\"4\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"2\" name=\"Route2\" color=\"1\" fill=\"3\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"3\" name=\"Route3\" color=\"4\" fill=\"3\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"4\" name=\"Route4\" color=\"1\" fill=\"4\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"5\" name=\"Route5\" color=\"4\" fill=\"4\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"6\" name=\"Route6\" color=\"1\" fill=\"8\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"7\" name=\"Route7\" color=\"4\" fill=\"8\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"8\" name=\"Route8\" color=\"1\" fill=\"2\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"9\" name=\"Route9\" color=\"4\" fill=\"2\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"10\" name=\"Route10\" color=\"1\" fill=\"7\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"11\" name=\"Route11\" color=\"4\" fill=\"7\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"12\" name=\"Route12\" color=\"1\" fill=\"5\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"13\" name=\"Route13\" color=\"4\" fill=\"5\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"14\" name=\"Route14\" color=\"1\" fill=\"6\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"15\" name=\"Route15\" color=\"4\" fill=\"6\" visible=\"no\" active=\"no\"\/>\r\n<layer number=\"16\" name=\"Bottom\" color=\"1\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"17\" name=\"Pads\" color=\"2\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"18\" name=\"Vias\" color=\"2\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"19\" name=\"Unrouted\" color=\"6\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"20\" name=\"Dimension\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"21\" name=\"tPlace\" color=\"16\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"22\" name=\"bPlace\" color=\"14\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"23\" name=\"tOrigins\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"24\" name=\"bOrigins\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"25\" name=\"tNames\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"26\" name=\"bNames\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"27\" name=\"tValues\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"28\" name=\"bValues\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"29\" name=\"tStop\" color=\"7\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"30\" name=\"bStop\" color=\"7\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"31\" name=\"tCream\" color=\"7\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"32\" name=\"bCream\" color=\"7\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"33\" name=\"tFinish\" color=\"6\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"34\" name=\"bFinish\" color=\"6\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"35\" name=\"tGlue\" color=\"7\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"36\" name=\"bGlue\" color=\"7\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"37\" name=\"tTest\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"38\" name=\"bTest\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"39\" name=\"tKeepout\" color=\"4\" fill=\"11\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"40\" name=\"bKeepout\" color=\"1\" fill=\"11\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"41\" name=\"tRestrict\" color=\"4\" fill=\"10\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"42\" name=\"bRestrict\" color=\"1\" fill=\"10\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"43\" name=\"vRestrict\" color=\"2\" fill=\"10\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"44\" name=\"Drills\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"45\" name=\"Holes\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"46\" name=\"Milling\" color=\"3\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"47\" name=\"Measures\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"48\" name=\"Document\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"49\" name=\"Reference\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<layer number=\"51\" name=\"tDocu\" color=\"6\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\r\n<layer number=\"52\" name=\"bDocu\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\r\n<\/layers>\r\n<board>\r\n<plain>";
  var tail = "<\/plain>\r\n<libraries>\r\n<\/libraries>\r\n<attributes>\r\n<\/attributes>\r\n<variantdefs>\r\n<\/variantdefs>\r\n<classes>\r\n<class number=\"0\" name=\"default\" width=\"0\" drill=\"0\">\r\n<\/class>\r\n<\/classes>\r\n<designrules name=\"default\">\r\n<description language=\"en\">&lt;b&gt;EAGLE Design Rules&lt;\/b&gt;\r\n&lt;p&gt;\r\nThe default Design Rules have been set to cover\r\na wide range of applications. Your particular design\r\nmay have different requirements, so please make the\r\nnecessary adjustments and save your customized\r\ndesign rules under a new name.\r\n<\/description>\r\n<param name=\"layerSetup\" value=\"(1*16)\"\/>\r\n<param name=\"mtCopper\" value=\"0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm 0.035mm\"\/>\r\n<param name=\"mtIsolate\" value=\"1.5mm 0.15mm 0.2mm 0.15mm 0.2mm 0.15mm 0.2mm 0.15mm 0.2mm 0.15mm 0.2mm 0.15mm 0.2mm 0.15mm 0.2mm\"\/>\r\n<param name=\"mdWireWire\" value=\"8mil\"\/>\r\n<param name=\"mdWirePad\" value=\"8mil\"\/>\r\n<param name=\"mdWireVia\" value=\"8mil\"\/>\r\n<param name=\"mdPadPad\" value=\"8mil\"\/>\r\n<param name=\"mdPadVia\" value=\"8mil\"\/>\r\n<param name=\"mdViaVia\" value=\"8mil\"\/>\r\n<param name=\"mdSmdPad\" value=\"8mil\"\/>\r\n<param name=\"mdSmdVia\" value=\"8mil\"\/>\r\n<param name=\"mdSmdSmd\" value=\"8mil\"\/>\r\n<param name=\"mdViaViaSameLayer\" value=\"8mil\"\/>\r\n<param name=\"mnLayersViaInSmd\" value=\"2\"\/>\r\n<param name=\"mdCopperDimension\" value=\"40mil\"\/>\r\n<param name=\"mdDrill\" value=\"8mil\"\/>\r\n<param name=\"mdSmdStop\" value=\"0mil\"\/>\r\n<param name=\"msWidth\" value=\"10mil\"\/>\r\n<param name=\"msDrill\" value=\"0.6mm\"\/>\r\n<param name=\"msMicroVia\" value=\"9.99mm\"\/>\r\n<param name=\"msBlindViaRatio\" value=\"0.5\"\/>\r\n<param name=\"rvPadTop\" value=\"0.25\"\/>\r\n<param name=\"rvPadInner\" value=\"0.25\"\/>\r\n<param name=\"rvPadBottom\" value=\"0.25\"\/>\r\n<param name=\"rvViaOuter\" value=\"0.25\"\/>\r\n<param name=\"rvViaInner\" value=\"0.25\"\/>\r\n<param name=\"rvMicroViaOuter\" value=\"0.25\"\/>\r\n<param name=\"rvMicroViaInner\" value=\"0.25\"\/>\r\n<param name=\"rlMinPadTop\" value=\"10mil\"\/>\r\n<param name=\"rlMaxPadTop\" value=\"20mil\"\/>\r\n<param name=\"rlMinPadInner\" value=\"10mil\"\/>\r\n<param name=\"rlMaxPadInner\" value=\"20mil\"\/>\r\n<param name=\"rlMinPadBottom\" value=\"10mil\"\/>\r\n<param name=\"rlMaxPadBottom\" value=\"20mil\"\/>\r\n<param name=\"rlMinViaOuter\" value=\"8mil\"\/>\r\n<param name=\"rlMaxViaOuter\" value=\"20mil\"\/>\r\n<param name=\"rlMinViaInner\" value=\"8mil\"\/>\r\n<param name=\"rlMaxViaInner\" value=\"20mil\"\/>\r\n<param name=\"rlMinMicroViaOuter\" value=\"4mil\"\/>\r\n<param name=\"rlMaxMicroViaOuter\" value=\"20mil\"\/>\r\n<param name=\"rlMinMicroViaInner\" value=\"4mil\"\/>\r\n<param name=\"rlMaxMicroViaInner\" value=\"20mil\"\/>\r\n<param name=\"psTop\" value=\"-1\"\/>\r\n<param name=\"psBottom\" value=\"-1\"\/>\r\n<param name=\"psFirst\" value=\"-1\"\/>\r\n<param name=\"psElongationLong\" value=\"100\"\/>\r\n<param name=\"psElongationOffset\" value=\"100\"\/>\r\n<param name=\"mvStopFrame\" value=\"1\"\/>\r\n<param name=\"mvCreamFrame\" value=\"0\"\/>\r\n<param name=\"mlMinStopFrame\" value=\"4mil\"\/>\r\n<param name=\"mlMaxStopFrame\" value=\"4mil\"\/>\r\n<param name=\"mlMinCreamFrame\" value=\"0mil\"\/>\r\n<param name=\"mlMaxCreamFrame\" value=\"0mil\"\/>\r\n<param name=\"mlViaStopLimit\" value=\"0mil\"\/>\r\n<param name=\"srRoundness\" value=\"0\"\/>\r\n<param name=\"srMinRoundness\" value=\"0mil\"\/>\r\n<param name=\"srMaxRoundness\" value=\"0mil\"\/>\r\n<param name=\"slThermalIsolate\" value=\"10mil\"\/>\r\n<param name=\"slThermalsForVias\" value=\"0\"\/>\r\n<param name=\"dpMaxLengthDifference\" value=\"10mm\"\/>\r\n<param name=\"dpGapFactor\" value=\"2.5\"\/>\r\n<param name=\"checkGrid\" value=\"0\"\/>\r\n<param name=\"checkAngle\" value=\"0\"\/>\r\n<param name=\"checkFont\" value=\"1\"\/>\r\n<param name=\"checkRestrict\" value=\"1\"\/>\r\n<param name=\"useDiameter\" value=\"13\"\/>\r\n<param name=\"maxErrors\" value=\"999999\"\/>\r\n<\/designrules>\r\n<autorouter>\r\n<pass name=\"Default\">\r\n<param name=\"RoutingGrid\" value=\"50mil\"\/>\r\n<param name=\"AutoGrid\" value=\"1\"\/>\r\n<param name=\"Efforts\" value=\"0\"\/>\r\n<param name=\"TopRouterVariant\" value=\"1\"\/>\r\n<param name=\"tpViaShape\" value=\"round\"\/>\r\n<param name=\"PrefDir.1\" value=\"a\"\/>\r\n<param name=\"PrefDir.2\" value=\"0\"\/>\r\n<param name=\"PrefDir.3\" value=\"0\"\/>\r\n<param name=\"PrefDir.4\" value=\"0\"\/>\r\n<param name=\"PrefDir.5\" value=\"0\"\/>\r\n<param name=\"PrefDir.6\" value=\"0\"\/>\r\n<param name=\"PrefDir.7\" value=\"0\"\/>\r\n<param name=\"PrefDir.8\" value=\"0\"\/>\r\n<param name=\"PrefDir.9\" value=\"0\"\/>\r\n<param name=\"PrefDir.10\" value=\"0\"\/>\r\n<param name=\"PrefDir.11\" value=\"0\"\/>\r\n<param name=\"PrefDir.12\" value=\"0\"\/>\r\n<param name=\"PrefDir.13\" value=\"0\"\/>\r\n<param name=\"PrefDir.14\" value=\"0\"\/>\r\n<param name=\"PrefDir.15\" value=\"0\"\/>\r\n<param name=\"PrefDir.16\" value=\"a\"\/>\r\n<param name=\"cfVia\" value=\"8\"\/>\r\n<param name=\"cfNonPref\" value=\"5\"\/>\r\n<param name=\"cfChangeDir\" value=\"2\"\/>\r\n<param name=\"cfOrthStep\" value=\"2\"\/>\r\n<param name=\"cfDiagStep\" value=\"3\"\/>\r\n<param name=\"cfExtdStep\" value=\"0\"\/>\r\n<param name=\"cfBonusStep\" value=\"1\"\/>\r\n<param name=\"cfMalusStep\" value=\"1\"\/>\r\n<param name=\"cfPadImpact\" value=\"4\"\/>\r\n<param name=\"cfSmdImpact\" value=\"4\"\/>\r\n<param name=\"cfBusImpact\" value=\"0\"\/>\r\n<param name=\"cfHugging\" value=\"3\"\/>\r\n<param name=\"cfAvoid\" value=\"4\"\/>\r\n<param name=\"cfPolygon\" value=\"10\"\/>\r\n<param name=\"cfBase.1\" value=\"0\"\/>\r\n<param name=\"cfBase.2\" value=\"1\"\/>\r\n<param name=\"cfBase.3\" value=\"1\"\/>\r\n<param name=\"cfBase.4\" value=\"1\"\/>\r\n<param name=\"cfBase.5\" value=\"1\"\/>\r\n<param name=\"cfBase.6\" value=\"1\"\/>\r\n<param name=\"cfBase.7\" value=\"1\"\/>\r\n<param name=\"cfBase.8\" value=\"1\"\/>\r\n<param name=\"cfBase.9\" value=\"1\"\/>\r\n<param name=\"cfBase.10\" value=\"1\"\/>\r\n<param name=\"cfBase.11\" value=\"1\"\/>\r\n<param name=\"cfBase.12\" value=\"1\"\/>\r\n<param name=\"cfBase.13\" value=\"1\"\/>\r\n<param name=\"cfBase.14\" value=\"1\"\/>\r\n<param name=\"cfBase.15\" value=\"1\"\/>\r\n<param name=\"cfBase.16\" value=\"0\"\/>\r\n<param name=\"mnVias\" value=\"20\"\/>\r\n<param name=\"mnSegments\" value=\"9999\"\/>\r\n<param name=\"mnExtdSteps\" value=\"9999\"\/>\r\n<param name=\"mnRipupLevel\" value=\"10\"\/>\r\n<param name=\"mnRipupSteps\" value=\"100\"\/>\r\n<param name=\"mnRipupTotal\" value=\"100\"\/>\r\n<\/pass>\r\n<pass name=\"Follow-me\" refer=\"Default\" active=\"yes\">\r\n<\/pass>\r\n<pass name=\"Busses\" refer=\"Default\" active=\"yes\">\r\n<param name=\"cfNonPref\" value=\"4\"\/>\r\n<param name=\"cfBusImpact\" value=\"4\"\/>\r\n<param name=\"cfHugging\" value=\"0\"\/>\r\n<param name=\"mnVias\" value=\"0\"\/>\r\n<\/pass>\r\n<pass name=\"Route\" refer=\"Default\" active=\"yes\">\r\n<\/pass>\r\n<pass name=\"Optimize1\" refer=\"Default\" active=\"yes\">\r\n<param name=\"cfVia\" value=\"99\"\/>\r\n<param name=\"cfExtdStep\" value=\"10\"\/>\r\n<param name=\"cfHugging\" value=\"1\"\/>\r\n<param name=\"mnExtdSteps\" value=\"1\"\/>\r\n<param name=\"mnRipupLevel\" value=\"0\"\/>\r\n<\/pass>\r\n<pass name=\"Optimize2\" refer=\"Optimize1\" active=\"yes\">\r\n<param name=\"cfNonPref\" value=\"0\"\/>\r\n<param name=\"cfChangeDir\" value=\"6\"\/>\r\n<param name=\"cfExtdStep\" value=\"0\"\/>\r\n<param name=\"cfBonusStep\" value=\"2\"\/>\r\n<param name=\"cfMalusStep\" value=\"2\"\/>\r\n<param name=\"cfPadImpact\" value=\"2\"\/>\r\n<param name=\"cfSmdImpact\" value=\"2\"\/>\r\n<param name=\"cfHugging\" value=\"0\"\/>\r\n<\/pass>\r\n<pass name=\"Optimize3\" refer=\"Optimize2\" active=\"yes\">\r\n<param name=\"cfChangeDir\" value=\"8\"\/>\r\n<param name=\"cfPadImpact\" value=\"0\"\/>\r\n<param name=\"cfSmdImpact\" value=\"0\"\/>\r\n<\/pass>\r\n<pass name=\"Optimize4\" refer=\"Optimize3\" active=\"yes\">\r\n<param name=\"cfChangeDir\" value=\"25\"\/>\r\n<\/pass>\r\n<\/autorouter>\r\n<elements>\r\n<\/elements>\r\n<signals>\r\n<\/signals>\r\n<\/board>\r\n<\/drawing>\r\n<\/eagle>";

  var brdFile = head + document.getElementById("output").value + tail;
  var filename = document.getElementById("labelText").value + ".brd";


  var blob = new Blob([brdFile], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, filename);
});

function appendLib() {

	


}