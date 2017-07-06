/**
 * Created by liz on 6/29/2017.
 */

function loadDoc(file){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function onClick (e) {
    isProgramaticZoom = true;
    console.log('test');
    $('#content').width('60%');
    map.invalidateSize();
    map.flyTo(e.target.getLatLng(), 14);
    homeButton.enable();
    var id = e.target._icon.id;
    loadDoc(places[id].file);
    isProgramaticZoom = false;
}
function onHover(e){
    e.target._openTooltip();
}

function flyHome() {
    isProgramaticZoom = true;
    document.getElementById("content").innerHTML = "";
    $('#content').width('0%');
    map.invalidateSize();
    homeButton.disable();
    map.flyTo([52.353013, -1.433716], 7);
    isProgramaticZoom = false;
}

var places = {
    "nottingham":{name: "Nottingham", latlong: [52.936925, -1.196139], file:"nottingham.html"},
    "breedon": {name: "Breedon on the Hill", latlong: [52.806069, -1.399813], file:"sampleBlog2.html"},
    "appleby": {name: "Appleby Parva & No Man's Heath", latlong: [52.677361, -1.570809]},
    "lincoln": {name: "Lincoln", latlong: [53.230688, -0.540579]},
    "montgomery":{name: "Montgomery", latlong: [52.562790, -3.149331], file:"short-desc/montgomery.html"},
    "london": {name: "London", latlong: [51.507351, -0.127758]},
    "cambridge": {name: "Cambridge", latlong: [52.205337, 0.121817]}
};

/*
function topNav(map){
    for (i = 0; i < places.length; i++) {
        var p = places[i];
        markers[p.id] = L.marker(p.latlong).bindTooltip(p.name).addTo(map).on('click', onClick).on('hover', onHover);
    }
}*/

/*
 //var offaCoords = []
 //var offa = L.polyline(offaCoords, {color: 'red'}).addTo(map);

 var nameWalkCoords = [[52.677501, -1.545757],[52.676155, -1.544480],[52.674594, -1.545510],[52.673527, -1.548643],
    [52.672356, -1.548514],[52.671002, -1.549201],[52.669962, -1.552033],[52.669259, -1.552591],[52.668764, -1.553364],
    [52.671939, -1.560917],[52.676007, -1.571367],[52.676436, -1.572075],[52.677854, -1.569811],[52.677921, -1.566523],
    [52.678062, -1.562322],[52.677791, -1.561174],[52.676464, -1.557376],[52.676906, -1.556239],[52.676568, -1.555402],
    [52.677222, -1.547012],[52.677501, -1.545757]];

 var nameWalk = L.polyline(nameWalkCoords, {color:'red'}).addTo(map);
 */