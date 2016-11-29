var connect = require("connect");
var serveStatic = require("serve-static");
var app = connect();

function sayHello(request,response,next){
	response.setHeader("Content-type","text/plain");
	response.end("Hello Connect");
}

app.use(serveStatic(__dirname + "/app")).listen(3031);