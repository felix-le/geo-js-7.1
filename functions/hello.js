let positionArr = [0, 0];
// https://dreamy-heyrovsky-ef5242.netlify.app/.netlify/functions/hello?latitude=1&longitude=2

function curPosition(latitude, longitude) {
  if ((latitude, longitude)) {
    positionArr[0] = latitude;
    positionArr[1] = longitude;
  } else {
    return positionArr;
  }
}

exports.handler = async (event) => {
  const latitude = event.queryStringParameters.latitude;
  const longitude = event.queryStringParameters.longitude;
  curPosition(latitude, longitude);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(positionArr),
  };
};
