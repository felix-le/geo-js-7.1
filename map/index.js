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
  postLocation(latitude, longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
// setInterval(function () {
// }, 3000);
