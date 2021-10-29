let showLocation = [];

setInterval(function () {
  fetch('https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello')
    .then((res) => res.json())
    .then((data) => (showLocation = [...data]));

  setTimeout(() => {
    var map = L.map('mapid').setView([showLocation[0], showLocation[1]], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([showLocation[0], showLocation[1]])
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }, 1000);
}, 3000);
