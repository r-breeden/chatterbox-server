var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'Content-Type': 'application/json',
  'access-control-max-age': 10 // Seconds.
};

var sendRequest = function (response, data, statusCode) {
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.sendRequest = sendRequest;