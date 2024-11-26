<script>
// Initialize the map and set its view to the chosen geographical coordinates and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (you can use OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load the .osm file (you may need to convert it to GeoJSON format first)
fetch('path/to/your/map.osm')
    .then(response => response.text())
    .then(data => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        var geojson = osmtogeojson(xmlDoc);
        L.geoJSON(geojson).addTo(map);
    });
</script>
