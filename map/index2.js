let showLocation = {};

fetch('https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello')
  .then((res) => res.json())
  .then((data) => (showLocation = data));

console.log('🚀 ~ file: index2.js ~ line 3 ~ showLocation', showLocation);

// var map = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
