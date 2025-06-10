function uploadMedia() {
  const input = document.getElementById('uploadInput');
  if (!input.files.length) {
    alert("Please select a file!");
    return;
  }
  const file = input.files[0];
  alert(`File "${file.name}" uploaded successfully! (simulation)`);
}

// Leaflet map setup
const map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Dummy hotspot data
const hotspots = [
  { lat: 19.07, lon: 72.87, msg: "Plastic pollution near Mumbai port" },
  { lat: 13.08, lon: 80.27, msg: "Chemical leak detected in Chennai" }
];

hotspots.forEach(hs => {
  L.circle([hs.lat, hs.lon], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
  }).addTo(map).bindPopup(hs.msg);
});
