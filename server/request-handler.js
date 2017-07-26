var url = require('url');
var work = require ('./utility');
var results = [];
var objectId = 0;


var requestHandler = function(request, response) {

  var statusCode = 200;

  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  
  if ( request.method === 'POST' && request.url === '/classes/messages') {
    var data = '';
    request.on('data', function (chunk) {
      data += chunk;
      
    }); 
    request.on('end', function() {
      message = JSON.parse(data);
      objectId++;
      message.objectId = objectId;
      results.push(message);
    });
    work.sendRequest(response, data, 201);

  } else if ( request.method === 'GET' && request.url === '/classes/messages') {
    work.sendRequest(response, {results: results}, 200);

  } else if ( request.method === 'OPTIONS' && request.url === '/classes/messages' ) {
    work.sendRequest(response, null, 404);
  } 

};


exports.requestHandler = requestHandler;