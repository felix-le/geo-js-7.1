let position = {
  latitude: 0,
  longitude: 0,
};
// https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello?latitude=1&longitude=2

function curPosition(latitude, longitude) {
  if (latitude && longitude) {
    position.latitude = latitude;
    position.latitude = longitude;
  } else {
    return position;
  }
}

exports.handler = async (event) => {
  const latitude = event.queryStringParameters.latitude;
  const longitude = event.queryStringParameters.longitude;
  curPosition(latitude, longitude);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(position),
  };
};
