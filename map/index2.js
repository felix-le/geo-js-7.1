// setInterval(async function () {
//   async function getLocation() {
//     let response = await fetch(
//       'https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello'
//     );
//     let data = await response.json();
//     return data;
//   }
//   const location = await getLocation();
//   console.log('🚀 ~ file: index2.js ~ line 12 ~ location', location);

//   if (location.length > 0) {
//     var map = L.map('mapid').setView([location[0], location[1]], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     L.marker([location[0], location[1]])
//       .addTo(map)
//       .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//       .openPopup();
//   }
// }, 3000);
