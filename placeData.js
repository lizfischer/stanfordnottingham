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
    homeButton.enable();
    var id = e.target._icon.id;
    $('#content').load(places[id].file, function(){
        $('#content').width('60%');
        map.invalidateSize();
        map.flyTo(e.target.getLatLng(), 14);
        isProgramaticZoom = false;
    });
    //loadDoc(places[id].file);
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
    "breedon-saltst": {name: "Breedon on the Hill and Salt Street", latlong: [52.806069, -1.399813], file:"short-desc/breedon-saltst.html"},
    "brixworth": {name: "Brixworth", latlong: [52.333980, -0.904436], file:"short-desc/brixworth.html"},
    "cambridge": {name: "Cambridge", latlong: [52.205337, 0.121817],file:"short-desc/cambridge.html"},
    "ely-peterborough": {name: "Ely and Peterborough", latlong: [52.398661, 0.263779], file:"short-desc/ely-peterborough.html"},
    "icknield": {name: "Icknield Way", latlong: [51.885465, -0.578812], file:"short-desc/icknield.html"},
    "lincoln": {name: "Lincoln", latlong: [53.234297, -0.536056], file:"short-desc/lincoln.html"},
    "london": {name: "London", latlong: [51.529999, -0.127716],file:"short-desc/london.html"},
    "montgomery":{name: "Montgomery", latlong: [52.562790, -3.149331], file:"short-desc/montgomery.html"},
    "nottingham":{name: "Nottingham", latlong: [52.936925, -1.196139], file:"short-desc/nottingham.html"},
    "offasdyke": {name: "Offa's Dyke", latlong: [52.567373, -3.129205],file:"short-desc/offasdyke.html"},
    "sherwood": {name: "Sherwood Forest", latlong: [53.202948, -1.064000],file:"short-desc/sherwood.html"},
    "suttonhoo": {name: "Sutton Hoo", latlong: [52.094451, 1.340796],file:"short-desc/suttonhoo.html"},
    "weststow": {name: "West Stow", latlong: [52.310801, 0.635667],file:"short-desc/weststow.html"}
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