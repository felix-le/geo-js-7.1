var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const defaultLocation = {
  latitude: 43.7296141,
  longitude: -79.4845983,
};

const postLocation = (latitude, longitude) => {
  fetch(
    `https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello?latitude=${latitude}&longitude=${longitude}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(latitude, longitude),
    }
  );
};

function success(pos) {
  var crd = pos.coords;

  const { latitude, longitude } = crd;
  if (!latitude || !longitude) {
    postLocation(defaultLocation.latitude, defaultLocation.longitude);
  } else {
    postLocation(latitude, longitude);
  }
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
setInterval(function () {
  navigator.geolocation.getCurrentPosition(success, error, options);
}, 3000);

// var map = L.map('mapid').setView([43.7296141, -79.4845983], 20);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([43.7296141, -79.4845983])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
