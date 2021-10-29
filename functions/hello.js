let positionArr = [0, 0];
// https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello?latitude=1&longitude=2

function curPosition(latitude, longitude) {
  positionArr[0] = latitude;
  positionArr[1] = longitude;
}

exports.handler = async (event) => {
  const latitude = parseInt(event.queryStringParameters.latitude);
  const longitude = parseInt(event.queryStringParameters.longitude);
  curPosition(latitude, longitude);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.parse(positionArr),
  };
};
