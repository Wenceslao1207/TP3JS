var http = require("http");
var url = require("url");
// Tenemos que definirlo como una funcion para que la misma sea exportable

function start(route, handle) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;	
		console.log("Request received");
		/*
		response.writeHead(200, {"Content-Type": "text/plain"} );
		var content = route(handle, pathname);
		response.write(content);*/

		route(handle, pathname, response);
		//response.end();
	}).listen(8888);
	console.log("Server has started");
}

exports.start = start;

