var map = L.map('map').setView([28.481, -16.31219], 16);

// Capas base
var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


var catastroBase = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Dirección General de Catastro</a>',
    maxZoom: 20
});

var transporteBase = L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=f1c34816afb04acd87203206d7ee85f4')

// Punto de localización
var punto = L.marker([28.481, -16.31219]).bindPopup('Tenerife System SLL<br> Tel 922 31 54 45<br>www.tenerifesystem.com');

var baseMaps = {
    "OSM": osmBase,
    "Catastro": catastroBase,
    "Transporte" : transporteBase,
};

var overlayMaps = {
    "Tenerife System": punto
};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: false // true
}).addTo(map);




