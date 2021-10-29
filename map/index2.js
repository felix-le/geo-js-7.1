async function getLocation() {
  let response = await fetch(
    'https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello'
  );
  let data = await response.json();
  return data;
}

setInterval(async function () {
  const location = await getLocation();
  if (location.length > 0) {
    var map = L.map('mapid').setView([location[0], location[1]], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([location[0], location[1]])
      .addTo(map)
      .bindPopup("Hello, I'm here")
      .openPopup();
  }
}, 1000);
